import store from '../redux/store';
import { apiReqRealtimeRes } from '../redux/actions/actionCreatorsRealtimeResponse';

const BASE_URL_RT = '/rt/';

export function createCompetitor(name, cb) {
  store.dispatch(apiReqRealtimeRes({
    url: BASE_URL_RT + 'competitors',
    method: 'POST',
    data: {name},
    successCallback: cb
  }));
}

