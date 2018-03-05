import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EventsPage.css';
import EventSelector from '../components/EventSelector';
import EventList from '../components/EventList';

class EventsPage extends Component {
  render() {
    return (
      <div className='EventsPage'>
        <EventSelector />
        <EventList />
      </div>
    );
  }
}

export default connect(

)(EventsPage);