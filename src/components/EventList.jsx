import React from 'react';
import { connect } from 'react-redux';
import './EventList.css';

const EventList = (props) => {
  return (
    <div className='EventList col-section'>
      <div className='section-title'>EVENTS</div>
    </div>
  );
}

export default connect(
  (state) => ({
    
  })
)(EventList);