module.exports = (state={}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      console.log(action.user);
      return {
        currentUser: action.user
      };

    default:
      return state;
  }
};
