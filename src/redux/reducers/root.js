import { combineReducers } from 'redux';
import systemReducer from './system';
import userReducer from './user';
import curTourneyReducer from './curTourney';

export default combineReducers({
  systemState: systemReducer,
  userState: userReducer,
  curTourneyState: curTourneyReducer,
});