import * as actions from '../actions/actionNames';

// reducer for curTourneyState slice of state


// ******** test tourney *********
const initialState = {
  name: 'Hustlers - 2018',
  startDate: new Date('2018-04-13'),
  endDate: new Date('2018-04-14'),
  nextTicketNo: 1,
  takePercentage: 10,
  competitors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case actions.USER_AUTHENTICATED:
    //   return { ...state, user: action.payload };

    default:
      return state;
  }
};