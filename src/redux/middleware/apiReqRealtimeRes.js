import * as actions from '../actions/actionNames';
import { fetchBegin, fetchEnd } from '../actions/actionCreatorsSystem';
import tokenService from '../../utils/tokenService';

const apiReqRealtimeResMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== actions.API_REQ_RT_RES) return next(action);
  let { payload } = action;
  let options = {
    method: payload.method || 'GET',
    cache: 'no-store'
  }
  if (payload.data) {
    options.data = JSON.stringify(payload.data);
    options.headers = {'Content-Type': 'application/json'};
  }

  let token = !action.payload.noToken && tokenService.getToken();
  if (token) options.headers = Object.assign({}, options.headers, {'Authorization': `Bearer ${token}`});
  
  dispatch(fetchBegin());
  return fetch(payload.url, options).then(res => res.json())
    .catch(() => {/* show toast error via redux action */})
    .finally(() => dispatch(fetchEnd()))
};

export default apiReqRealtimeResMiddleware;