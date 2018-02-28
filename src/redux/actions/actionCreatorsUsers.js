import * as actions from './actionNames';

export const userAuthenticated = (userFromToken) => {
  return {
    type: actions.USER_AUTHENTICATED,
    payload: userFromToken
  }
};

