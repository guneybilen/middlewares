import _ from 'lodash'
import { FETCH_USERS } from '../actions/types';


export default function (state = [], action) {
  // console.log('action type', action.type);
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload.data];
    // return _.mapKeys(action.payload.data, 'id');
    // break;
    //default:
    //return [];
  }

  return state;
}