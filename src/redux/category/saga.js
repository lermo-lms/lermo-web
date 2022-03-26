import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';
import categoryAPI from './api';

import actions from './actions';

function* get_categories() {
  const apiResult = yield call(categoryAPI.getCategories);

  if (apiResult.status === '000') {
    const { categories = [] } = apiResult.data;
    yield put({
      type: actions.GET_CATEGORIES_SUCCESS,
      payload: categories,
    });
    return;
  }

  yield put({
    type: actions.GET_CATEGORIES_ERROR,
    payload: { ...apiResult },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_CATEGORIES_REQUEST, get_categories),
  ]);
}
