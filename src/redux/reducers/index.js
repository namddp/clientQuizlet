import { combineReducers } from 'redux';
import userReducer from './userReducer';
import classReducer from './classReducer';

const rootReducer = combineReducers({
  auth: userReducer,
  class: classReducer
});

export default rootReducer;