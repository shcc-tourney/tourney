import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EventsPage.css';
import TourneySelector from '../components/TourneySelector';
import EventList from '../components/EventList';

class EventsPage extends Component {
  render() {
    return (
      <div className='EventsPage'>
        <TourneySelector curTourney={this.props.current} />
        <EventList />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tourneys: state.tourneysState.tourneys,
    current: state.tourneysState.current
  }),
  {
    
  }
)(EventsPage);