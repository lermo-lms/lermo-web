import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import Category from './category/reducer';
import Classroom from './classroom/reducer';
import User from './user/reducer';
import Video from './video/reducer';
import Post from './post/reducer';
import Feed from './feed/reducer';

export default combineReducers({
  Auth,
  Category,
  Classroom,
  User,
  Video,
  Post,
  Feed,
});
