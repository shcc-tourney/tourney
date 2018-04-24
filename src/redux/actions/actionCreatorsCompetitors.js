import * as actions from './actionNames';

export const setCompetitors = (allCompetitors) => {
  return {
    type: actions.SET_COMPETITORS,
    payload: allCompetitors
  }
};

export const setCompetitorFormMode = (mode) => {
  return {
    type: actions.SET_COMPETITOR_FORM_MODE,
    payload: mode
  }
};

