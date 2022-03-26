import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import { Fab, Action } from 'react-tiny-fab';
// import 'react-tiny-fab/dist/styles.css';
import { Button, Tooltip } from 'antd';
import { PlusOutlined, VideoCameraAddOutlined, CreditCardTwoTone } from '@ant-design/icons';
import {
  IconAddContent, IconPost, IconCreatePost, IconAddVideo, IconStartLive, IconConference,
} from '@components/atoms/icons';
import { useDispatch, useSelector } from 'react-redux';

import videoActions from '@redux/video/actions';
import postAction from '@redux/post/actions';
import Style from './style';

const { create_video } = videoActions;
const { create_post } = postAction;

const NewContentButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showFab, setShowFab] = useState('off');
  const [btnClick, setBtnClick] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const {
    videoId, post, videoType, profile,
  } = useSelector((state) => {
    return {
      videoId: state.Video.get('videoId'),
      post: state.Post.get('post'),
      videoType: state.Video.get('videoType'),
      profile: state.Auth.get('profile'),
    };
  });

  useEffect(() => {
    if (redirect && post) router.push(`/post/${post._id}`);
  }, [post]);

  useEffect(() => {
    if (redirect && videoId && videoType === 'live') {
      setRedirect(false);
      router.push(`/live?v=${videoId}`);
    } else if (redirect && videoId && videoType === 'video') {
      setRedirect(false);
      router.push(`/video/${videoId}`);
    }
  }, [videoId]);

  const onCreate = () => {
    if (btnClick) {
      setShowFab('off');
      setBtnClick(false);
    } else {
      setShowFab('on');
      setBtnClick(true);
    }
  };

  const onCreateVideo = () => {
    dispatch(create_video({ title: 'draft', videoType: 'video' }));
    setRedirect(true);
  };

  const onCreateLive = () => {
    dispatch(create_video({ title: 'draft', videoType: 'live' }));
    setRedirect(true);
  };

  const onCreateConf = () => {
    router.push('/conf');
  };

  const onCreatePost = () => {
    const status = 'draft';
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

    dispatch(create_post(status, initData));
    setRedirect(true);
  };

  return (
    <Style>
      { profile
      && (
      <div className="button-container">
        <Button className={`button-create-content-${showFab}`} type="primary" icon={<span className="icon"> <IconConference /> </span>} onClick={onCreateConf}> Conf (Beta) </Button>
        <Button className={`button-create-content-${showFab}`} type="primary" icon={<span className="icon"> <IconStartLive /> </span>} onClick={onCreateLive}> Start Live </Button>
        <Button className={`button-create-content-${showFab}`} type="primary" icon={<span className="icon"> <IconAddVideo /> </span>} onClick={onCreateVideo}> Add Video </Button>
        <Button className={`button-create-content-${showFab}`} type="primary" icon={<span className="icon"> <IconCreatePost /> </span>} onClick={onCreatePost}> Create Post </Button>
        <Button className="button-create" type="primary" icon={<div className="icon"> <IconAddContent /> </div>} onClick={onCreate}> SHARE SOMETHING </Button>
      </div>
      )}
    </Style>
  );
};

export default NewContentButton;
