import axios from 'axios';
import { MESSAGES, MESSAGE } from '../api/index';


export const fetchMessages = () => {
  return function(dispatch) {
    return axios.get(MESSAGES).then((messages) => {
      dispatch(receiveMessages(messages));
    });
  };
};

export const sendAMessage = (message) => {
  return function(dispatch) {
    return axios.post(MESSAGE, message).then((msg) => {
      dispatch(sendMessage(msg));
    });
  };
};

export const receiveMessages = (messages) => {
  return {
    type: 'RECEIVE_MESSAGES',
    messages: { messages }
  };
};

export const sendMessage = (message) => {
  return {
    type: 'SEND_MESSAGE',
    message: { message }
  };
};

// exports.fetchCurrentUser = (userId) => {
//   return function(dispatch) {
//     return axios.get(USERS_URL(userId)).then((response) => {
//       dispatch(setCurrentUser(response.data));
//     });
//   };
// };
//
// export const setCurrentUser = (user) => {
//   return {
//     type: 'SET_CURRENT_USER',
//     user: { user }
//   };
// };
