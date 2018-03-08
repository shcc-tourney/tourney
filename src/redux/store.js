import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/root';
import apiReqRealtimeResMiddleware from './middleware/apiReqRealtimeRes';
import apiUiToastMiddleware from './middleware/uiToast';

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      apiReqRealtimeResMiddleware,
      apiUiToastMiddleware
    )
  )
);
