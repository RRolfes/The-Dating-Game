import {
  USER_EDIT,
  USER_FETCH_SUCESS,
  USER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  oauth_id: '',
  name: '',
  avatar: '',
  email: '',
  gender: '',
  age: '',
  age_range_low: '',
  age_range_high: '',
  location: '',
  occupation: '',
  education: '',
  about: '',
  interested_in: '',
  liked_users: [],
  disliked_users: [],
  matches: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_EDIT:
      return { ...state, [action.payload.prop]: action.payload.value };
    case USER_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
