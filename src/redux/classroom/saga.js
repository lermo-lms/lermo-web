import { all, takeEvery, call, put } from 'redux-saga/effects';
import Router from 'next/router';

import api from './api';

import actions from './actions';

function* get_classrooms() {
  const apiResult = yield call(api.getClassroom);

  if (apiResult.status === '000') {
    yield put({
      type: actions.GET_CLASSROOMS_SUCCESS,
      payload: apiResult.data,
    });
    return;
  }

  yield put({
    type: actions.GET_CLASSROOMS_ERROR,
    payload: { ...apiResult },
  });
}

function* create_classroom({ form }) {
  const apiResult = yield call(api.createClassroom, form);

  if (apiResult.status === '000') {
    yield put({
      type: actions.CREATE_CLASSROOM_SUCCESS,
      payload: form,
    });
    Router.push(`/classroom/${apiResult.data._id}`);
    return;
  }

  yield put({
    type: actions.CREATE_CLASSROOM_ERROR,
    payload: { ...apiResult },
  });
}

function* get_classroom_detail({ id }) {
  const apiResult = yield call(api.getClassroomDetail, id);

  if (apiResult.status === '000') {
    yield put({
      type: actions.GET_CLASSROOM_DETAIL_SUCCESS,
      payload: apiResult.data,
    });
    return;
  }

  yield put({
    type: actions.GET_CLASSROOM_DETAIL_ERROR,
    payload: { ...apiResult },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_CLASSROOMS_REQUEST, get_classrooms),
    takeEvery(actions.CREATE_CLASSROOM_REQUEST, create_classroom),
    takeEvery(actions.GET_CLASSROOM_DETAIL_REQUEST, get_classroom_detail),
  ]);
}
