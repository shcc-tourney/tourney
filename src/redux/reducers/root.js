import { combineReducers } from 'redux';
import systemReducer from './system';
import userReducer from './user';
import tourneysReducer from './tourneys';

export default combineReducers({
  systemState: systemReducer,
  userState: userReducer,
  tourneysState: tourneysReducer,
});