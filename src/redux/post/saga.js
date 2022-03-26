import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';
import { message } from 'antd';
import Router from 'next/router';

import postAPI from './api';
import actions from './actions';
import feedAction from '../feed/actions';

function* createPost(payload) {
  const { data } = payload;
  const api = yield call(postAPI.createPost, data);

  if (api.status === '000') {
    yield put({
      type: actions.CREATE_POST_SUCCESS,
      payload: api.data,
    });
    message.success('Create Post');
  } else {
    message.error('Can\'t Create Post');
  }
}

function* updatePost(payload) {
  const { data } = payload;
  const api = yield call(postAPI.updatePost, data);
  const { status } = api.data;

  if (api.status === '000') {
    yield put({
      type: actions.UPDATE_POST_SUCCESS,
      payload: {
        status,
      },
    });
    yield put(feedAction.clean_feed());
    if (status === 'publish') {
      yield Router.push('/space/myspace');
    } else if (status === 'deleted') {
      yield put(feedAction.get_my_feed(0, 10));
    }
    message.success('Update post');
  } else {
    message.error('Can\'t Update post');
  }
}

function* uploadImage(payload) {
  const { data } = payload;
  const api = yield call(postAPI.uploadImage, data);

  if (api.status === '000') {
    yield put({
      type: actions.UPLOAD_POST_IMAGE_SUCCESS,
      payload: api.data,
    });
  } else {
    message.error('Can\'t upload image');
  }
}

function* getPost({ payload }) {
  const { pid } = payload;
  const api = yield call(postAPI.getPost, pid);

  if (api.status === '000') {
    yield put({
      type: actions.GET_POST_SUCCESS,
      payload: api.data,
    });
  } else {
    message.error('Can\'t get post');
  }
}

function* getPosts() {
  const api = yield call(postAPI.getPosts);

  if (api.status === '000') {
    yield put({
      type: actions.GET_POSTS_SUCCESS,
      payload: api.data,
    });
  } else {
    // message.error('Can\'t get post');
  }
}

function* get_post_comments({ payload }) {
  const { id } = payload;
  const api = yield call(postAPI.getPostComments, id);

  if (api.status === '000') {
    yield put({
      type: actions.GET_POST_COMMENTS_SUCCESS,
      payload: api.data?.comments,
    });
    return;
  }

  yield put({
    type: actions.GET_POST_COMMENTS_ERROR,
    payload: { ...api },
  });
}

function* add_comment({ payload }) {
  const { id, comment } = payload;
  const api = yield call(postAPI.addComment, id, comment);

  if (api.status === '000') {
    yield put({
      type: actions.ADD_COMMENT_SUCCESS,
      payload: api.data,
    });
    yield put(actions.get_post_comments(id));
    return;
  }

  yield put({
    type: actions.ADD_COMMENT_ERROR,
    payload: { ...api },
  });
}

function* update_view({ payload }) {
  const { id } = payload;
  const api = yield call(postAPI.updateView, id);

  if (api.status === '000') {
    yield put({
      type: actions.UPDATE_VIEW_SUCCESS,
      payload: api.data,
    });
  }

  yield put({
    type: actions.UPDATE_VIEW_ERROR,
    payload: { ...api },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CREATE_POST, createPost),
    takeEvery(actions.UPLOAD_POST_IMAGE, uploadImage),
    takeEvery(actions.GET_POST, getPost),
    takeEvery(actions.GET_POSTS, getPosts),
    takeEvery(actions.UPDATE_POST, updatePost),
    takeEvery(actions.GET_POST_COMMENTS_REQUEST, get_post_comments),
    takeEvery(actions.ADD_COMMENT_REQUEST, add_comment),
    takeEvery(actions.UPDATE_VIEW, update_view),
  ]);
}
