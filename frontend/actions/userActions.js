import axios from 'axios';
import { USERS_URL } from '../api';

export const fetchCurrentUser = (userId) => (dispatch) => {
  console.log(USERS_URL(userId));
    return axios.get(USERS_URL(userId)).then((response) => {
      dispatch(setCurrentUser(response.data));
    });
};

export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user: { user }
  };
};
