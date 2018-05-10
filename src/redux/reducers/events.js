import * as actions from '../actions/actionNames';
import { cloneDeep } from 'lodash';

// reducer for eventsState slice of state

const initialState = {
  eventFormMode: null,
  editEvent: null,
  workingEvent: null,
  newEvent: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_EDIT_EVENT:
      if (action.payload) {
        // edit a deep copy of event to enable easy cancellation
        var copy = cloneDeep(action.payload);
        return {...state, eventFormMode: 'EDIT', editEvent: copy};
      } else {
        return {...state, eventFormMode: null, editEvent: null};
      }
    case actions.SET_WORKING_EVENT:
      if (action.payload) {
        return {...state, workingEvent: action.payload};
      } else {
        return {...state, workingEvent: null};
      }
    default:
      return state;
  }
};