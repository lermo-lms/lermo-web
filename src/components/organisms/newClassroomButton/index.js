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

const NewClassroomButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    profile,
  } = useSelector((state) => {
    return {
      profile: state.Auth.get('profile'),
    };
  });

  const onCreate = () => {
    router.push('/classroom/create');
  };

  return (
    <Style>
      { profile
      && (
      <div className="button-container">
        <Button className="button-create" type="primary" icon={<div className="icon"> <IconAddContent /> </div>} onClick={onCreate}> CREATE CLASSROOM </Button>
      </div>
      )}
    </Style>
  );
};

export default NewClassroomButton;
