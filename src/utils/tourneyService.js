import store from '../redux/store';
import { apiReqRealtimeRes } from '../redux/actions/actionCreatorsRealtimeResponse';

const BASE_URL_RT = '/rt/';

export function updateEvent(event, cb) {


console.log('updateEvent being called with ', event)

  store.dispatch(apiReqRealtimeRes({
    url: BASE_URL_RT + 'events',
    method: 'PUT',
    data: event,
    successCallback: cb
  }));
}
