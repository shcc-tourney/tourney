import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/root';
import apiReqRealtimeResMiddleware from './middleware/apiReqRealtimeRes';
import apiReqMiddleware from './middleware/apiReq';
import apiUiToastMiddleware from './middleware/uiToast';
import userService from '../utils/userService';

function loadInitialState() {
  return {
    userState: {
      user: userService.getUser()
    }
  };
}

export default createStore(
  rootReducer,
  loadInitialState(),
  composeWithDevTools(
    applyMiddleware(
      apiReqRealtimeResMiddleware,
      apiReqMiddleware,
      apiUiToastMiddleware
    )
  )
);

