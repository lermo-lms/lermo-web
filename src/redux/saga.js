import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import categorySaga from './category/saga';
import classroomSaga from './classroom/saga';
import userSaga from './user/saga';
import videoSaga from './video/saga';
import postSaga from './post/saga';
import feedSage from './feed/saga';

export default function* rootSaga() {
  yield all([authSaga(), categorySaga(), classroomSaga(), userSaga(), videoSaga(), postSaga(), feedSage()]);
}
