import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  classrooms: [],
  classroomDetail: null,
});

export default (state = initState, { type, payload }) => {
  switch (type) {
    case actions.GET_CLASSROOMS_SUCCESS:
      return state.set('classrooms', payload);

    case actions.GET_CLASSROOM_DETAIL_SUCCESS:
      return state.set('classroomDetail', payload);

    default:
      return state;
  }
};
