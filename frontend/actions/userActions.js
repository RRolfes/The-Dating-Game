import axios from 'axios';
import { USERS_URL } from '../api';

export const fetchCurrentUser = (userId) => (dispatch) => {
    return axios.get(USERS_URL(userId)).then((response) => {
      dispatch(setCurrentUser(response.data));
    }).catch(err => {console.log(err);});
};

export const updateCurrentUser = (userId, userProps) => (dispatch) => {
    const url = USERS_URL(userId);
    return axios.put(url, userProps).then(res => {
      dispatch(setCurrentUser(res.data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user: { user }
  };
};
