import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/root';
import apiReqRealtimeResMiddleware from './middleware/apiReqRealtimeRes';
import apiReqMiddleware from './middleware/apiReq';
import apiUiToastMiddleware from './middleware/uiToast';
import tokenService from '../utils/tokenService';

function loadInitialState() {
  return {
    userState: {
      user: tokenService.getUserFromToken()
    }  
  };  
}  

 const store = createStore(
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

export default store;

