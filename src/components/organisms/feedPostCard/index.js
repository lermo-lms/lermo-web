import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postAction from '@root/src/redux/post/actions';
import Link from 'next/link';
import router from 'next/router';
import { Avatar, Dropdown, Menu } from 'antd';

import hljs from 'highlight.js';
import Style from './style';

import 'node_modules/highlight.js/styles/github-dark.css';

const { update_post } = postAction;

const FeedPostCard = ({ data, editable }) => {
  const {
    contentRAW, avatar, username, createdAt, id, contentHTML, status, userId,
  } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelectorAll('pre').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [contentHTML]);

  const onPostClick = () => {
    router.push(`/read?p=${id}`);
  };

  const onSelectMenu = ({ key }) => {
    switch (key) {
      case '1':
        router.push(`/post/${id}`);
        break;
      case '2':
        dispatch(update_post(id, 'deleted'));
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={onSelectMenu}>
      <Menu.Item key="1">
        Edit
      </Menu.Item>
      <Menu.Item key="2">
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Style>
      <div className="header">
        <div className="avatar">
          <Avatar
            alt="user_avatar"
            src={avatar}
          />
        </div>
        <div className="username"> <a href={`/space/${userId}`}> {username} </a> <span> {createdAt } </span></div>
        <div className="post-date">{createdAt} {editable && `(${status})`} </div>
        { editable && (
        <div className="edit">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              ...
            </a>
          </Dropdown>
        </div>
        ) }
      </div>

      <div className="post-container" onClick={onPostClick}>
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
      </div>
    </Style>
  );
};

export default FeedPostCard;
