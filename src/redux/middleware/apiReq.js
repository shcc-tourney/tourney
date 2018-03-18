import * as actions from '../actions/actionNames';
import { fetchBegin, fetchEnd } from '../actions/actionCreatorsSystem';
import { uiToast } from '../actions/actionCreatorsUI';
import tokenService from '../../utils/tokenService';
import { convertDateStringPropsToDateObjects } from '../../utils/utilities';

const apiReq = ({ dispatch }) => next => action => {
  if (action.type !== actions.API_REQ) return next(action);
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
  return fetch(payload.url, options).then(res => {
      if (res.ok) return res.json();
      throw new Error('Response to fetch did not return a status of OK');
    })
    .then(data => {
      if (payload.convertStringsToDates) convertDateStringPropsToDateObjects(data);
      if (payload.successActionCreator) return dispatch(payload.successActionCreator(data));
      return data;
    })
    .catch((err) => dispatch(uiToast({html: err.message, classes: 'toast-error'})))
    .finally(() => dispatch(fetchEnd()))
};

export default apiReq;