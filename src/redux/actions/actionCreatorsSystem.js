import * as actions from './actionNames';

export const websocketConnect = () => ({
  type: actions.WS_CONNECT
});

export const websocketDisconnect = () => ({
  type: actions.WS_DISCONNECT
});

export const fetchBegin = () => ({
  type: actions.FETCH_BEGIN
});

export const fetchEnd = () => ({
  type: actions.FETCH_END
});
