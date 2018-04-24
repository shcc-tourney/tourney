import * as actions from '../actions/actionNames';

// reducer for competitorsState slice of state

const initialState = {
  all: [],
  competitorFormMode: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_COMPETITORS:
      return { ...state, all: action.payload};
    case actions.SET_COMPETITOR_FORM_MODE:
      return { ...state, competitorFormMode: action.payload};
    default:
      return state;
  }
};