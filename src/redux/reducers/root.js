import { combineReducers } from 'redux';
import systemReducer from './system';
import userReducer from './user';
import tourneysReducer from './tourneys';
import eventsReducer from './events';
import competitorsReducer from './competitors';

export default combineReducers({
  systemState: systemReducer,
  userState: userReducer,
  tourneysState: tourneysReducer,
  eventsState: eventsReducer,
  competitorsState: competitorsReducer,
});