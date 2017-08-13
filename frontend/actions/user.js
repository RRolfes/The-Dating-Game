import * as UserUtil from '../util/user_util';

export const RECEIEVE_SINGLE_USER = 'RECEIEVE_SINGLE_USER';
// export const UPDATE_CURRENT_USER = 'UP DATE_CURRENT_USER';




export const receiveSingleUser = (currentUser) => ({
  type: RECEIEVE_SINGLE_USER,
  currentUser
});

export const updateCurrentUser = (user) => dispatch => (
  UserUtil.updateUser(user).then(
    currentUser =>
  )
)
