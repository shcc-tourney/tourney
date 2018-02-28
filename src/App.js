import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './pages/LoginPage';
import OddsPage from './pages/OddsPage';
import EventsPage from './pages/EventsPage';
import WagersPage from './pages/WagersPage';
import PayoutsPage from './pages/PayoutsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar {...this.props}/>
        <Switch>
          <Route path='/login' render={props => (
            <LoginPage {...props}/>
          )} />
          <Route path='/odds' render={props => (
            <OddsPage {...props}/>
           )} />
          <Route path='/events' render={props => (
            <EventsPage/>
          )} />
          <Route path='/wagers' render={props => (
            <WagersPage/>
          )} />
          <Route path='/payouts' render={props => (
            <PayoutsPage/>
          )} />
          <Redirect to='/odds' />
        </Switch>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.systemState.loading,
    user: state.userState.user
  }),
  {}
)(App);
