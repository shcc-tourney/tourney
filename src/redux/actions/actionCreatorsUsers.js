import * as actions from './actionNames';

export const userAuthenticated = (userFromToken) => {
  return {
    type: actions.USER_AUTHENTICATED,
    payload: userFromToken
  }
};

export const userLoggedOut = () => {
  return {
    type: actions.USER_LOGGED_OUT
  }
};

