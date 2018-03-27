import * as actions from './actionNames';

export const apiReqRealtimeRes = ({ url, method, data, noToken }) => {
  return {
    type: actions.API_REQ_REALTIME_RES,
    payload: {
      url,
      method,
      data,
      noToken
    }
  };
};


