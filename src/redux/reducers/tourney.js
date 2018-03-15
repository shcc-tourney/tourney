import * as actions from '../actions/actionNames';

// reducer for curTourneyState slice of state

const initialState = {
  previous: [
  ],
  current: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_TOURNEY:
      action.payload.startDate = new Date(action.payload.startDate);
      action.payload.endDate = new Date(action.payload.endDate);
      return { ...state, current: action.payload };
    default:
      return state;
  }
};