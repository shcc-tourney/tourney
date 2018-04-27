import * as actions from './actionNames';

export const updatePreviousTourney = (updatedTourney) => {
  return {
    type: actions.UPDATE_PREVIOUS_TOURNEY,
    payload: updatedTourney
  };
};

export const setCurrentTourney = (currentTourney) => {
  return {
    type: actions.SET_CURRENT_TOURNEY,
    payload: currentTourney
  };
};

export const setPastTourneys = (allTourneys) => {
  return {
    type: actions.SET_PAST_TOURNEYS,
    payload: allTourneys  // might include current tourney
  };
};

export const setSelectedTourney = (tourney) => {
  return {
    type: actions.SET_SELECTED_TOURNEY,
    payload: tourney
  };
};

export const setEditEvent = (event) => {
  return {
    type: actions.SET_EDIT_EVENT,
    payload: event
  };
};
