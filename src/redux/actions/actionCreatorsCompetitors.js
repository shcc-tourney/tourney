import * as actions from './actionNames';

export const setCompetitors = (allCompetitors) => {
  return {
    type: actions.SET_COMPETITORS,
    payload: allCompetitors
  }
};

