import * as actions from '../actions/actionNames';

// reducer for competitorsState slice of state

const initialState = {
  all: [
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_COMPETITORS:
      return { ...state, all: action.payload};
    default:
      return state;
  }
};