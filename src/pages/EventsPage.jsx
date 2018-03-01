import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EventsPage.css';

class EventsPage extends Component {
  render() {
    return (
      <div className='EventsPage'>
        <div className='col m4'><h3>Event Selector</h3></div>
        <div className='col m8'><h3>Event Detail</h3></div>
      </div>
    );
  }
}

export default connect(

)(EventsPage);