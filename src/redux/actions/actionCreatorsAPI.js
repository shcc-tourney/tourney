import * as actions from './actionNames';

export const apiReq = ({url, method, data, noToken, successActionCreator}) => {
  return {
    type: actions.API_REQ,
    payload: {
      url,
      method,
      data,
      noToken,
      successActionCreator
    }
  };
};


