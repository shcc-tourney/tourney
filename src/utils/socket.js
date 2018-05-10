import socketClient from 'socket.io-client';
import messages from './socket-messages';
import tokenService from './tokenService';
import { websocketConnect, websocketDisconnect } from '../redux/actions/actionCreatorsSystem';
import { setCurrentTourney, setSelectedTourney, updatePreviousTourney } from '../redux/actions/actionCreatorsTourneys';
import { setWorkingEvent } from '../redux/actions/actionCreatorsEvents';
import { setCompetitors } from '../redux/actions/actionCreatorsCompetitors';
import store from '../redux/store';
import { convertDateStringPropsToDateObjects } from './utilities';

// Connects to window.location by default
const socket = socketClient();

export function joinRooms() {
  let token = tokenService.getToken();
  // sending falsey token leaves rooms - good!
  socket.emit(messages.SOCKET_JOIN_ROOMS, token);
}

socket.on(messages.UPDATE_TOURNEY, (tourney) => {
  convertDateStringPropsToDateObjects(tourney);
  let curState = store.getState();
  let tState = curState.tourneysState;
  let eState = curState.eventsState;
  if (tState.current && tState.current._id === tourney._id) store.dispatch(setCurrentTourney(tourney));
  if (tState.selected && tState.selected._id === tourney._id) store.dispatch(setSelectedTourney(tourney));
  if (tState.previous.some(t => t._id === tourney._id)) store.dispatch(updatePreviousTourney(tourney));
  // set workingEvent if updated tourney has current workingEvent
  if (eState.workingEvent) {
    let tourneyEvent = tourney.events.find(e => e._id === eState.workingEvent._id);
    if (tourneyEvent) store.dispatch(setWorkingEvent(tourneyEvent));
  }
});

socket.on(messages.SET_COMPETITORS, (competitors) => {
  store.dispatch(setCompetitors(competitors));
});

socket.on('connect', () => {
  store.dispatch(websocketConnect());
  // join auth & admin (optionally) rooms if we have a token
  joinRooms();
});

socket.on('disconnect', () => {
  store.dispatch(websocketDisconnect());
});

socket.on('message', (msg) => {
  console.log(msg);
});

export default socket;