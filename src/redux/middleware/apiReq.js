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
  };
  if (payload.data) {
    options.body = JSON.stringify(payload.data);
    options.headers = {'Content-Type': 'application/json'};
  }

  let token = !action.payload.noToken && tokenService.getToken();
  if (token) options.headers = Object.assign({}, options.headers, {'Authorization': `Bearer ${token}`});
  
  dispatch(fetchBegin());
  return fetch(payload.url, options)
    .then(res => res.json())
    .then(data => {
      dispatch(fetchEnd());
      if (data.err) {
        dispatch(uiToast({ html: data.err, classes: 'toast-error' }))
      } else {
        if (payload.convertStringsToDates) convertDateStringPropsToDateObjects(data);
        if (payload.successActionCreator) return dispatch(payload.successActionCreator(data));
        return data;
      }
    })
    .catch((err) => {
      dispatch(fetchEnd());
      dispatch(uiToast({html: err.message, classes: 'toast-error'}));
    });
};

export default apiReq;