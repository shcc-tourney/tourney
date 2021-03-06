import React, { Component } from 'react';
import './EventsPage.css';
import TourneySelector from '../components/TourneySelector';
import EventList from '../components/EventList';

class EventsPage extends Component {
  render() {
    return (
      <div className='EventsPage'>
        <TourneySelector/>
        <EventList history={this.props.history}/>
      </div>
    );
  }
}

export default EventsPage;