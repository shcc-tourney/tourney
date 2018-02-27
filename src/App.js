import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OddsPage from './pages/OddsPage';
import EventsPage from './pages/EventsPage';
import WagersPage from './pages/WagersPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar {...this.props}/>
        <Switch>
          <Route path='/login' render={props => (
            <LoginPage />
          )} />
          <Route path='/odds' render={props => (
            <OddsPage {...props} />
           )} />
          <Route path='/events' render={props => (
            <EventsPage/>
          )} />
          <Route path='/wagers' render={props => (
            <WagersPage/>
          )} />
          <Redirect to='/login' />
        </Switch>
      </div>
    );
  }
}

export default App;
