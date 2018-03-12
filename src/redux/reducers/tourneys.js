import * as actions from '../actions/actionNames';

// reducer for curTourneyState slice of state


// ******** test tourney *********
const initialState = {
  previous: [
    // {
    //   _id: 123,
    //   name: 'Hustlers - 2018',
    //   current: true,
    //   startDate: new Date(2018, 3, 13),
    //   endDate: new Date(2018, 3, 14),
    //   nextTicketNo: 1,
    //   takePercentage: 10,
    //   competitors: []
    // }
  ],
  current: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case actions.USER_AUTHENTICATED:
    //   return { ...state, user: action.payload };

    default:
      return state;
  }
};