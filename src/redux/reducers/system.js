import * as actions from '../actions/actionNames';

// reducer for system related state

const initialState = {
  connected: false,
  fetchingCount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.WS_CONNECT:
      return { ...state, connected: true };
    case actions.WS_DISCONNECT:
      return { ...state, connected: false };
    case actions.FETCH_BEGIN:
      return { ...state, fetchingCount: ++state.fetchingCount };
    case actions.FETCH_END:
      return { ...state, fetchingCount: --state.fetchingCount };
    default:
      return state;
  }
};