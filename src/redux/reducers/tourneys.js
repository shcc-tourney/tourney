import * as actions from '../actions/actionNames';

// reducer for tourneysState slice of state

const initialState = {
  previous: [
  ],
  current: null,
  selected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_PREVIOUS_TOURNEY:
      let prevTourneys = [...state.previous];
      let updatedIdx = prevTourneys.findIndex(t => t._id === action.payload._id);
      if (updatedIdx >= 0) {
        prevTourneys[updatedIdx] = action.payload;
        return {...state, previous: prevTourneys};
      } else {
        return state;
      }
    case actions.SET_CURRENT_TOURNEY:
      return {...state, current: action.payload, selected: (state.selected || action.payload)};
    case actions.SET_PAST_TOURNEYS:
      // exclude the current tourney
      let tourneys = state.current ? action.payload.filter(t => t._id !== state.current._id) : action.payload;
      return { ...state, previous: tourneys, selected: (state.selected || (tourneys.length && tourneys[0]))};
    case actions.SET_SELECTED_TOURNEY:
      // allow either _id or actual tourney object
      if (typeof action.payload === 'string') {
        action.payload = state.previous.find(t => t._id === action.payload)
          || (state.current._id === action.payload ? state.current : null);
      }
      return {...state, selected: action.payload}
    default:
      return state;
  }
};