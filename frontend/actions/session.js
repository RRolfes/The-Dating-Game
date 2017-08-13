import * as UserUtil from '../util/user_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});


export const signup = user => dispatch => (
  UserUtil.signup(user).then(newUser => {
    return (
    dispatch(receiveCurrentUser(newUser))
);
}));

export const signin = user => dispatch => (
  UserUtil.signin(user).then(newUser => {
    return (
    dispatch(receiveCurrentUser(newUser))
);
}));
