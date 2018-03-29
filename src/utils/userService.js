import tokenService from './tokenService';
import { joinRooms } from './socket';

export default {
  getUser,
  login,
  forgetMe
};

function getUser() {
  return tokenService.getUserFromToken();
}

function login(creds) {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(creds)
  }).catch(() => {
    throw new Error('A network error occurred. Ensure you are connected to the Internet.');
  }).then(res => {
    if (!res.ok) throw new Error("Invalid Login Credentials - Try Again");
    return res.json();
  }).then(({ token }) => {
    tokenService.setToken(token);
    joinRooms();
    return tokenService.getUserFromToken();
  });
}

function forgetMe() {
  tokenService.removeToken();
  // will remove client socket from rooms on server
  joinRooms();
}
