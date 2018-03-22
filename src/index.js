import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './colors.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { apiReq } from './redux/actions/actionCreatorsAPI';
import { setCurrentTourney } from './redux/actions/actionCreatorsTourneys';

import store from './redux/store';

// connect to the socket.io server
import './utils/socket';

// load tourneys
store.dispatch(apiReq({
  url: '/api/tourneys/current',
  noToken: true,
  successActionCreator: setCurrentTourney
}));

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();