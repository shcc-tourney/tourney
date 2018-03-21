import React from 'react';
import { connect } from 'react-redux';
import './EventList.css';
import EventCard from './EventCard';
import NewEventModal from './NewEventModal';

const EventList = ({tourney}) => {
  function modal() {
    window.$('#create-event-modal').modal();
    window.$('#create-event-modal').modal('open');

  }
  let title = tourney ? ` — ${tourney.name}` : '';
  return (
    <div className='EventList col-section'>
      <div className='section-title'>EVENTS<span>{title}</span></div>
      {tourney && <div className='section-control-bar'><button className='btn-small' onClick={modal}>Create Event</button></div>}
      { tourney ?
        tourney.events.length ?
          tourney.events.map(e => <EventCard event={e} key={e._id}/>)
          :
          <h4 className='heading'>No Events for {tourney.name} Created Yet</h4>
        :
        <h4 className='heading'>No Tourney Selected</h4>
      }
      <NewEventModal />
      
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