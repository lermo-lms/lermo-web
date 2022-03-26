import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  categories: null,
});

export default function categoryReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.GET_CATEGORIES_SUCCESS:
      return state.set('categories', payload);

    default:
      return state;
  }
}
