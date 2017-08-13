import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER
} from '../actions/session';

const nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });
    default:
      return state;
  }
};

export default SessionReducer;
