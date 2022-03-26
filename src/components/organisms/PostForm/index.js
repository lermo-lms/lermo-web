import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import postAction from '@root/src/redux/post/actions';
import DOMPurify from 'dompurify';
import Config from '@config';

import { IconPhotoSquare } from '@components/atoms/icons';
import {
  DraftailEditor, ENTITY_TYPE, BLOCK_TYPE,
} from 'draftail';
import {
  EditorState, convertFromRaw, AtomicBlockUtils, convertToRaw, Modifier,
  ContentState,
} from 'draft-js';

import { convertToHTML } from 'draft-convert';

import {
  UnorderedListButton,
  OrderedListButton,
  ItalicButton,
  BoldButton,
  UnderlineButton,
  BlockquoteButton,
  CodeBlockButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
} from '@draft-js-plugins/buttons';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createLinkPlugin from '@draft-js-plugins/anchor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import ImageBlock from './imageBlock';

import Style from './style';

import 'draft-js/dist/Draft.css';
import 'draftail/dist/draftail.css';
import '@draft-js-plugins/side-toolbar/lib/plugin.css';
import '@draft-js-plugins/inline-toolbar/lib/plugin.css';
import 'prismjs/themes/prism.css';
import '@draft-js-plugins/emoji/lib/plugin.css';
import '@draft-js-plugins/hashtag/lib/plugin.css';
// import '@draft-js-plugins/linkify/lib/plugin.css';

const {
  upload_post_image,
  update_post,
} = postAction;

const sideToolbarPlugin = createSideToolbarPlugin({});
const { SideToolbar } = sideToolbarPlugin;

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const linkPlugin = createLinkPlugin({
  // theme: themeStyles,
  placeholder: 'link',
});

const { LinkButton } = linkPlugin;

const hashtagPlugin = createHashtagPlugin();

const linkifyPlugin = createLinkifyPlugin();

const plugins = [sideToolbarPlugin, inlineToolbarPlugin, linkPlugin, hashtagPlugin, linkifyPlugin];
const initData = {
  entityMap: {},
  blocks: [
    {
      key: 'init',
      text: '',
      type: 'unstyled',
      depth: 0,
      entityRanges: [],
      data: {},
    },
  ],
};

const CreatePostForm = ({ post }) => {
  const postId = post?.id;
  const dispatch = useDispatch();
  const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(post ? post.contentRAW : initData)));

  const { imageUrl } = useSelector((state) => ({
    imageUrl: state.Post.get('imageUrl'),
  }));

  useEffect(() => {
    if (imageUrl) insertImage(editorState, imageUrl);
  }, [imageUrl]);

  const onEditorStateChange = (nextState) => {
    const shouldFilterPaste = nextState.getCurrentContent() !== editorState.getCurrentContent()
    && nextState.getLastChangeType() === 'insert-fragment';
    // Hack Paste Replace Style
    if (shouldFilterPaste) return;
    setEditorState(nextState);
  };

  // Hack Paste Replace Style
  const onPaste = (e) => {
    let clipboardData = '';
    let pastedData = '';
    e.stopPropagation();
    e.preventDefault();
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');
    const pastedBlocks = ContentState.createFromText(pastedData).blockMap;
    const newState = Modifier.replaceWithFragment(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      pastedBlocks,
    );
    const newEditorState = EditorState.push(editorState, newState, 'insert-fragment');
    setEditorState(newEditorState);
  };

  useEffect(() => {
    // Hack Paste Replace Style
    document.addEventListener('paste', onPaste);
    return () => document.removeEventListener('paste', onPaste);
  });

  const UploadImage = (e) => {
    const { files } = e.target;
    dispatch(upload_post_image(postId, files[0]));
  };

  const insertImage = (e, url) => {
    const contentState = e.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'IMAGE',
      'IMMUTABLE',
      {
        src: url,
        alt: '',
      },
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    setEditorState(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
  };

  const exporterConfig = {
    blockToHTML: (block) => {
      if (block.type === BLOCK_TYPE.BLOCKQUOTE) {
        return <blockquote />;
      }

      // Discard atomic blocks, as they get converted based on their entity.
      if (block.type === BLOCK_TYPE.ATOMIC) {
        return {
          start: '',
          end: '',
        };
      }

      return null;
    },

    entityToHTML: (entity, originalText) => {
      if (entity.type === ENTITY_TYPE.LINK) {
        return <a href={entity.data.url}>{originalText}</a>;
      }

      if (entity.type === ENTITY_TYPE.IMAGE) {
        return <img src={entity.data.src} alt={entity.data.alt} />;
      }

      if (entity.type === ENTITY_TYPE.HORIZONTAL_RULE) {
        return <hr />;
      }

      return originalText;
    },
  };

  const toHTML = (raw) => (raw ? convertToHTML(exporterConfig)(convertFromRaw(raw)) : '');

  const onSave = (status) => {
    /* eslint-disable */
    const REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const hashtagREX = /(^|)(#[a-z\d-]+)/ig;
    const contentState = editorState.getCurrentContent();
    const contentRAW = convertToRaw(contentState);
    const contentHTML = DOMPurify.sanitize(toHTML(contentRAW));
    const replaceCode = contentHTML.replaceAll('</pre><pre>', '\n');
    const replaceAtag = replaceCode.replace(REGEX, (v) => {
      // Image Problem
      if (v.match('lermo.s3-ap-southeast-1')
      || v.match('learnhub-test.s3-ap-southeast-1')) { return v; }
      return `<a target="_blank" href="${v}" rel="noreferrer" >${v}</a>`;
    });

    const tags = replaceAtag.match(/(^|)(#[a-z\d-]+)/ig);
    const replaceHashTag = replaceAtag.replace(hashtagREX, `$1<a target="_blank" href="${Config.WEB_ENDPOINT}/hashtag?t=$2" rel="noreferrer">$2</a>`);
    
    dispatch(update_post(postId, status, tags, contentRAW, replaceHashTag));
  };

  const onPreview = () => {
    onSave('draft');
    window.open(`/read?p=${postId}`, '_ blank');
  };

  return (
    <Style>
      <input id="file-input" style={{ visibility: 'hidden', display: 'none' }} type="file" onChange={(e) => { UploadImage(e); }} />

      <div className="App">

        <DraftailEditor
          editorState={editorState}
          onChange={onEditorStateChange}
          placeholder="Insert your title here."
          plugins={plugins}
          entityTypes={[
            {
              type: ENTITY_TYPE.IMAGE,
              description: 'Image',
              block: ImageBlock,
              attributes: ['src', 'alt'],
              whitelist: {
                src: '^(?!(data:|file:))',
              },
            },
          ]}
        />
        <SideToolbar>
          {
          (externalProps) => (
            /* eslint-disable */
            <div>
              <HeadlineOneButton {...externalProps}/>
              <HeadlineTwoButton {...externalProps}/>
              <HeadlineThreeButton {...externalProps}/>
              <BlockquoteButton {...externalProps}/>
              <OrderedListButton {...externalProps}/>
              <UnorderedListButton {...externalProps}/>
              <CodeBlockButton {...externalProps}/>
              <label className="blockType" htmlFor="file-input">
                <IconPhotoSquare className="button-upload-img" />
              </label>
              {/* <div>
                <EmojiSelect closeOnEmojiSelect />
              </div> */}
            </div>
            /* eslint-enable */
          )
          }
        </SideToolbar>
        <InlineToolbar>
          {
          (externalProps) => (
            <div>
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <CodeBlockButton {...externalProps} />
              {/* <LinkButton {...externalProps} /> */}
            </div>
          )
          }
        </InlineToolbar>
      </div>

      <div className="save-container">
        <Button className="button-publish" type="primary" onClick={() => onSave('publish')}> Publish </Button>
        <Button type="default" className="button-save" onClick={() => onSave('draft')}> Save as draft </Button>
        <Button type="default" className="button-save" onClick={() => onPreview()}> Preview </Button>
      </div>
    </Style>
  );
};

export default CreatePostForm;
