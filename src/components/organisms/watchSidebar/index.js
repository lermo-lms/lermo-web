import React, { useEffect, useState } from 'react';
import {
  Button, Input, Avatar, Skeleton, message,
} from 'antd';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { StarOutlined } from '@ant-design/icons';
import Link from 'next/link';

import videoActions from '@redux/video/actions';
import userActions from '@redux/user/actions';
import Style from './style';

// const { getFollower } = videoActions;
const { getFollower, follow, unfollow } = userActions;

const VIDEO_TYPE = {
  FREE: 'free',
  PAID: 'paid',
};

const WatchSidebar = ({
  className = '',
  type = VIDEO_TYPE.FREE,
  videoName = '...',
  price,
  editorInfo = {},
  onClickFollowBtn,
  isFollow,
  showButton,
  amountFollower,
  onClickPayment,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { editorFollower, profile } = useSelector((state) => ({
    editorFollower: state.User.get('follower'),
    profile: state.Auth.get('profile'),
  }));

  const FollowBtn = () => {
    if (showButton) {
      if (isFollow) {
        return (
          <Button onClick={onClickFollowBtn} type="primary">
            Unfollow
          </Button>
        );
      }
      return (
        <Button onClick={onClickFollowBtn} type="primary">
          Follow
        </Button>
      );
    }
    return (
      <Button disabled type="">
        Follow
      </Button>
    );
  };

  return (
    <Style className={className}>
      <div className="paid-box box">
        <div className="title">
          {type === VIDEO_TYPE.FREE ? 'Support' : ''}
        </div>
        <div className="pricing">
          {type === VIDEO_TYPE.PAID ? (
            <>{price} THB<span className="discount" /></>
          ) : (
            <Input addonAfter="THB" placeholder="Name your price." />
          )}
        </div>
        <Button onClick={onClickPayment} type="primary" block>
          {type === VIDEO_TYPE.FREE ? 'Donate' : 'Buy Now'}
        </Button>
        <Button type="default" block>
          <StarOutlined /> Wishlist
        </Button>
      </div>

      <div className="info-owner-video-box box">
        <div className="image">
          <Avatar src={editorInfo.avatar} alt="user-avatar" />
        </div>
        <div className="info">
          <Link href={`profile/${editorInfo.id}`}>
            <a className="profile">{editorInfo.username}</a>
          </Link>
          <span className="follower"> {amountFollower} followers</span>
        </div>
        <FollowBtn />
      </div>
      {/* <div className="title-course-group box">This course include</div> */}
    </Style>
  );
};

WatchSidebar.propTypes = {

};

export default WatchSidebar;
