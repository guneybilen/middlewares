import { combineReducers } from 'redux';
import usersReducaer from './users';

const rootReducer = combineReducers({
  //  state: (state = {}) => state # dummy reducer - delete it when you start the project.
  users: usersReducaer
});

export default rootReducer;
