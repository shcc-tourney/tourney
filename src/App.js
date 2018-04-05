import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPastTourneys } from './redux/actions/actionCreatorsTourneys';
import { apiReq } from './redux/actions/actionCreatorsAPI';
import LoginPage from './pages/LoginPage';
import TotePage from './pages/TotePage';
import EventsPage from './pages/EventsPage';
import WagersPage from './pages/WagersPage';
import PayoutsPage from './pages/PayoutsPage';
import TourneyCompetitorsPage from './pages/TourneyCompetitorsPage';

class App extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.apiReq({
        url: '/api/tourneys/past',
        convertStringsToDates: true,
        successActionCreator: setPastTourneys
      });
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar {...this.props}/>
        <main className='App-main'>
          <Switch>
            <Route path='/login' render={props => (
              <LoginPage {...props}/>
            )} />
            <Route path='/tote' render={props => (
              <TotePage {...props}/>
            )} />
            <Route path='/events' render={props => (
              this.props.user && this.props.user.admin ?
                <EventsPage/>
              :
                <Redirect to='/login' />
            )} />
            <Route path='/tourney-competitors/:tourneyId' render={props => (
              this.props.user && this.props.user.admin ?
                <TourneyCompetitorsPage {...props}/>
              :
                <Redirect to='/login' />
            )} />
            <Route path='/wagers' render={props => (
              this.props.user ?
                <WagersPage />
                :
                <Redirect to='/login' />
            )} />
            <Route path='/payouts' render={props => (
              this.props.user ?
                <PayoutsPage />
                :
                <Redirect to='/login' />
            )} />
            <Redirect to='/tote' />
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
  {
    apiReq
  }
)(App);
