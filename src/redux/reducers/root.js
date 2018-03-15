import { combineReducers } from 'redux';
import systemReducer from './system';
import userReducer from './user';
import tourneyReducer from './tourney';

export default combineReducers({
  systemState: systemReducer,
  userState: userReducer,
  tourneyState: tourneyReducer,
});