import { combineReducers } from 'redux';
import UserUpdateReducer from './userUpdateReducer';



export default combineReducers({
  userUpdate: UserUpdateReducer,
});

module.exports = (state={}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        currentUser: action.user
      };

    default:
      return state;
  }
};
