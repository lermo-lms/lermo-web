import { Avatar } from 'antd';
import { EyeFilled, MessageFilled } from '@ant-design/icons';
import WatchComment from '@components/organisms/watchComment';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import Style from './style';

import 'node_modules/highlight.js/styles/github-dark.css';

const ReadContent = ({ post, onEnterNewComment, comments }) => {
  const {
    contentHTML, avatar, username, createdAt, view,
  } = post;

  useEffect(() => {
    document.querySelectorAll('pre').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [post]);

  return (
    <Style>
      <div className="post-container">
        <div className="header">
          <div className="avatar">
            <Avatar
              alt="user_avatar"
              src={avatar}
            />
          </div>
          <div className="username">{username} <span> {createdAt} </span></div>
          <div className="post-date">{createdAt}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />

        <div className="post-info">
          <span className="info-item"><EyeFilled /> {`${view}`}</span>
          <span className="info-item"><MessageFilled /> {`${comments.length}`}</span>
        </div>
      </div>

      <div className="comments-container">
        <WatchComment
          dataSource={comments}
          onEnterNewComment={onEnterNewComment}
        />
      </div>
    </Style>
  );
};

export default ReadContent;
