import React from 'react';
import { connect } from 'react-redux';
import './EventList.css';

const EventList = ({tourney}) => {
  return (
    <div className='EventList col-section'>
      <div className='section-title'>EVENTS</div>
      { tourney ?
        <h4 className='heading'>{tourney.name}</h4>
        :
        <h4 className='heading'>No Tourney Selected</h4>
      }
    </div>
  );
}

export default connect(
  (state) => ({
    tourney: state.tourneyState.selected
  }),
  {
  }
)(EventList);