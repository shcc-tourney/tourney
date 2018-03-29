import socketClient from 'socket.io-client';
import messages from './socket-messages';
import tokenService from './tokenService';
import { websocketConnect, websocketDisconnect } from '../redux/actions/actionCreatorsSystem';
import store from '../redux/store';

// Connects to window.location by default
const socket = socketClient();

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

export function joinRooms() {
  let token = tokenService.getToken();
  // sending falsey token leaves rooms - good!
  socket.emit(messages.SOCKET_JOIN_ROOMS, token);
}

export default socket;