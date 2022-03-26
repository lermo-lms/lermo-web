import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  imageUrl: '',
  posts: [],
  comments: [],
  updatePost: {},
  // isLoadingFollowBtn: false,
});
export default function postReducer(state = initState, { type, payload = {} }) {
  switch (type) {
    case actions.UPLOAD_POST_IMAGE_SUCCESS:
      return state.set('imageUrl', payload.imageUrl);
    case actions.GET_POSTS_SUCCESS:
      return state.set('posts', payload);
    case actions.GET_POST_SUCCESS:
      return state.set('post', payload);
    case actions.CREATE_POST_SUCCESS:
      return state.set('post', payload);
    case actions.GET_POST_COMMENTS_SUCCESS:
      return state.set('comments', payload);
    case actions.CLEAN_POST_COMMENTS:
      return state.set('comments', []);
    case actions.UPDATE_POST_SUCCESS:
      return state.set('updatePost', payload);
    default:
      return state;
  }
}
