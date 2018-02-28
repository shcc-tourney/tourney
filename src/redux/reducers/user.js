import * as actions from '../actions/actionNames';
import userService from '../../utils/userService';

// reducer for userState slice of state

export default (state = { user: userService.getUser() }, action) => {
  switch (action.type) {
    case actions.USER_AUTHENTICATED:
      return { ...state, user: action.payload };
    case actions.USER_LOGGED_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};