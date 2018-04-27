import store from '../redux/store';
import { apiReqRealtimeRes } from '../redux/actions/actionCreatorsRealtimeResponse';

const BASE_URL_RT = '/rt/';

export function updateEvent(event, cb) {
  store.dispatch(apiReqRealtimeRes({
    url: BASE_URL_RT + 'events',
    method: 'PUT',
    data: event,
    successCallback: cb
  }));
}

export function assignCompetitorToTourney(tourneyId, competitorId, cb) {
  store.dispatch(apiReqRealtimeRes({
    url: `${BASE_URL_RT}tourneys/${tourneyId}/competitors/${competitorId}`,
    method: 'PUT',
    successCallback: cb
  }));
}

