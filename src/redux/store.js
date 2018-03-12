import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/root';
import apiReqRealtimeResMiddleware from './middleware/apiReqRealtimeRes';
import apiUiToastMiddleware from './middleware/uiToast';
import userService from '../utils/userService';

export default createStore(
  rootReducer,
  loadInitialState(),
  composeWithDevTools(
    applyMiddleware(
      apiReqRealtimeResMiddleware,
      apiUiToastMiddleware
    )
  )
);

function loadInitialState() {
  return {
    userState: {
      user: userService.getUser()
    }
  };
}
