import axios from 'axios';
import { USERS_URL } from '../api';

export const fetchCurrentUser = (userId) => (dispatch) => {
  console.log("hihihihihihihi");
    return axios.get(USERS_URL(userId)).then((response) => {
      dispatch(setCurrentUser(response.data));
    }).catch(err => {console.log(err);});
};

export const updateCurrentUser = (userId, userProps) => (dispatch) => {
    return axios.put(USERS_URL(userId, {userProps})).then((response) => {
      dispatch(setCurrentUser(response.data));
    });
};

export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user: { user }
  };
};
