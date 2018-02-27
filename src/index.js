import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './colors.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
