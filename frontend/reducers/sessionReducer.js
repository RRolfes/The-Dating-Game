import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER
} from '../actions/session';

import {
  RECEIVE_MESSAGES,
  SEND_MESSAGE
} from '../actions/messageActions';

const nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });
    case RECEIVE_MESSAGES:
      let messages = action.messages;
      return Object.assign({}, state, messages);
    case SEND_MESSAGE:
      let message = action.message;
      return Object.assign({}, state, message);
    default:
      return state;
  }
};

export default SessionReducer;
