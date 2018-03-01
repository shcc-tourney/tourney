import socketClient from 'socket.io-client';
import { websocketConnect, websocketDisconnect } from '../redux/actions/actionCreatorsSystem';
import store from '../redux/store';

// Connects to window.location by default
const socket = socketClient();

socket.on('connect', () => {
  store.dispatch(websocketConnect());
});

socket.on('disconnect', () => {
  store.dispatch(websocketDisconnect());
});

export default socket;