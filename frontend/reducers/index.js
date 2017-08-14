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
