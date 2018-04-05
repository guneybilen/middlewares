import { combineReducers } from 'redux';
import usersReducer from './users';

const rootReducer = combineReducers({
  //  state: (state = {}) => state # dummy reducer - delete it when you start the project.
  users: usersReducer
});

export default rootReducer;
