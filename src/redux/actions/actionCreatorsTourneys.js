import * as actions from './actionNames';

export const setCurrentTourney = (currentTourney) => {
  return {
    type: actions.SET_CURRENT_TOURNEY,
    payload: currentTourney
  }
};

export const setPastTourneys = (allTourneys) => {
  return {
    type: actions.SET_PAST_TOURNEYS,
    payload: allTourneys  // might include current tourney
  }
};


