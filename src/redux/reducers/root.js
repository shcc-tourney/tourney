import { combineReducers } from 'redux';
import systemReducer from './system';

export default combineReducers({
  systemState: systemReducer,
});