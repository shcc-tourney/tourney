import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EventsPage.css';
import TourneySelector from '../components/TourneySelector';
import EventList from '../components/EventList';

class EventsPage extends Component {
  render() {
    return (
      <div className='EventsPage'>
        <TourneySelector curTourney={this.props.curTourney} prevTourneys={this.props.prevTourneys} />
        <EventList />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    curTourney: state.tourneyState.current,
    prevTourneys: state.tourneyState.previous,
    selectedTourney: state.tourneyState.current || (state.tourneyState.previous.length && state.tourneyState.previous) || null
  }),
  {
    
  }
)(EventsPage);