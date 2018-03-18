import React from 'react';
import { connect } from 'react-redux';
import './EventList.css';
import EventCard from './EventCard';

const EventList = ({tourney}) => {
  let title = tourney ? ` — ${tourney.name}` : '';
  return (
    <div className='EventList col-section'>
      <div className='section-title'>EVENTS<span>{title}</span></div>
      {tourney && <div className='section-control-bar'><button className='btn-small'>Create Event</button></div>}
      { tourney ?
        tourney.events.map(e => <EventCard event={e} key={e._id}/>)
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