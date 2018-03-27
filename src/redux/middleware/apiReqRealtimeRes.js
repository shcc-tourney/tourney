import * as actions from '../actions/actionNames';
import { fetchBegin, fetchEnd } from '../actions/actionCreatorsSystem';
import { uiToast } from '../actions/actionCreatorsUI';
import tokenService from '../../utils/tokenService';

const apiReqRealtimeResMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== actions.API_REQ_REALTIME_RES) return next(action);
  let { payload } = action;
  let options = {
    method: payload.method || 'GET',
    cache: 'no-store'
  };
  if (payload.data) {
    options.data = JSON.stringify(payload.data);
    options.headers = {'Content-Type': 'application/json'};
  }

  let token = !action.payload.noToken && tokenService.getToken();
  if (token) options.headers = Object.assign({}, options.headers, {'Authorization': `Bearer ${token}`});
  
  dispatch(fetchBegin());
  return fetch(payload.url, options).then(res => {
      dispatch(fetchEnd());
      if (res.ok) return res.json();
      throw new Error('Response to fetch did not return a status of OK');
    })
    .catch((err) => {
      dispatch(fetchEnd());
      dispatch(uiToast({html: err.message, classes: 'toast-error'}))
    });
};

export default apiReqRealtimeResMiddleware;