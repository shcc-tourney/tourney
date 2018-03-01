import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
        <main className='App-main'>
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
        </main>
        <Footer />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    connected: state.systemState.connected,
    loading: state.systemState.loading,
    user: state.userState.user
  }),
  {}
)(App);
