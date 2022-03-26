import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { UserTopbarTemplate } from '@components/templates/user';
import MainButton from '@components/atoms/mainButton';
import { IconLeft, IconBack } from '@components/atoms/icons';
import CreatePostForm from '@root/src/components/organisms/PostForm';
import postAction from '@redux/post/actions';
import withAuth from '@components/templates/withAuth';
import LoadingPage from '@components/atoms/loadingPage';

import Style from './style';

const { get_post } = postAction;

const Post = ({ pid }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const postId = pid || router.query.pid;
  const [isLoading, setIsLoading] = useState(true);

  const { post, profile } = useSelector((state) => ({
    profile: state.Auth.get('profile'),
    post: state.Post.get('post'),
  }));

  useEffect(() => {
    if (!postId) {
      return;
    }

    dispatch(get_post(postId));
  }, [postId]);

  useEffect(() => {
    const { _id } = profile || {};
    const { userId } = post || {};

    if (!_id || !userId) return;

    if (_id && userId && _id === userId) {
      setIsLoading(false);
    } else {
      router.push('/');
    }
  }, [post, profile]);

  let BaseComponent = <LoadingPage />;
  if (!isLoading) {
    BaseComponent = <CreatePostForm post={post} />;
  }

  return <Style>{BaseComponent}</Style>;
};

export default withAuth(UserTopbarTemplate, Post);
