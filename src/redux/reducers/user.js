import * as actions from '../actions/actionNames';
// reducer for userState slice of state

export default (state = { user: null}, action) => {
  switch (action.type) {
    case actions.USER_AUTHENTICATED:
      return { ...state, user: action.payload };
    case actions.USER_LOGGED_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};