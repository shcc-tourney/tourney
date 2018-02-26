import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import OddsPage from './pages/OddsPage';
import EventsPage from './pages/EventsPage';
import WagersPage from './pages/WagersPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar {...this.props}/>
        <Switch>
          <Route path='/odds' render={props => (
            <OddsPage {...props} />
           )} />
          <Route path='/events' render={props => (
            <EventsPage/>
          )} />
          <Route path='/wagers' render={props => (
            <WagersPage/>
          )} />
          <Redirect to='/odds' />
        </Switch>
      </div>
    );
  }
}

export default App;
