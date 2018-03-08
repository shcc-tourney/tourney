import * as actions from './actionNames';

export const rtTest = () => {
  return {
    type: actions.API_REQ_RT_RES,
    payload: {
      url: '/rt/test'
    }
  }
};


