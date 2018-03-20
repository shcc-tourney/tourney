import * as actions from '../actions/actionNames';

// reducer for curTourneyState slice of state

const initialState = {
  previous: [
  ],
  current: null,
  selected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_TOURNEY:
      return {...state, current: action.payload, selected: (state.selected || action.payload)};
    case actions.SET_PAST_TOURNEYS:
      // exclude the current tourney
      let tourneys = state.current ? action.payload.filter(t => t._id !== state.current._id) : action.payload;
      return { ...state, previous: tourneys, selected: (state.selected || (tourneys.length && tourneys[0]))};
    case actions.SET_SELECTED_TOURNEY:
      return {...state, selected: action.payload}
    default:
      return state;
  }
};