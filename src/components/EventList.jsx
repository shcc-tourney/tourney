import React from 'react';
import { connect } from 'react-redux';
import './EventList.css';
import EventCard from './EventCard';
import NewEventModal from './NewEventModal';
import { isPending } from '../utils/appLogicTourney';

const EventList = ({tourney}) => {
  function modal() {
    window.$('#create-event-modal').modal();
    window.$('#create-event-modal').modal('open');

  }
  let title = tourney ? ` — ${tourney.name}` : '';
  let current = isPending(tourney);
  return (
    <div className='EventList col-section'>
      <div className='section-title'>EVENTS<span>{title}</span></div>
      {tourney && current && <div className='section-control-bar'><button className='btn-small' onClick={modal}>Create Event</button></div>}
      { tourney ?
        tourney.events.length ?
          tourney.events.map(e => <EventCard event={e} key={e._id}/>)
          :
          current ?
            <h4 className='heading'>No Events for {tourney.name} Created Yet</h4>
            :
            <h4 className='heading'>The {tourney.name} Is No Longer Current</h4>
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