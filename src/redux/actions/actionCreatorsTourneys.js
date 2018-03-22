import * as actions from './actionNames';

export const setCurrentTourney = (currentTourney) => {
  return {
    type: actions.SET_CURRENT_TOURNEY,
    payload: currentTourney
  }
};