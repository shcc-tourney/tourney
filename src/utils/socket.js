import socketClient from 'socket.io-client';
import messages from './socket-messages';
import tokenService from './tokenService';
import { websocketConnect, websocketDisconnect } from '../redux/actions/actionCreatorsSystem';
import { setCurrentTourney, setSelectedTourney, updatePreviousTourney } from '../redux/actions/actionCreatorsTourneys';
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
  let tState = store.getState().tourneysState;
  if (tState.current && tState.current._id === tourney._id) store.dispatch(setCurrentTourney(tourney));
  if (tState.selected && tState.selected._id === tourney._id) store.dispatch(setSelectedTourney(tourney));
  if (tState.previous.some(t => t._id === tourney._id)) store.dispatch(updatePreviousTourney(tourney));
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