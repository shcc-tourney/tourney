import React from 'react';
import { connect } from 'react-redux';
import './EventList.css';
import EventCard from './EventCard';
import NewEventModal from './NewEventModal';
import EditEventModal from './EditEventModal';
import { isPending } from '../utils/appLogicTourney';

const EventList = ({ tourney, eventFormMode, editEvent, history}) => {
  function openNewEventModal() {
    window.$('#new-event-modal').modal();
    window.$('#new-event-modal').modal('open');
  }
  let title = tourney ? ` — ${tourney.name}` : '';
  let current = isPending(tourney);
  return (
    <div className='EventList col-section'>
      <div className='section-title'>EVENTS<span>{title}</span></div>
      {tourney && current && <div className='section-control-bar'><button className='btn-small' onClick={openNewEventModal}>Create Event</button></div>}
      { tourney ?
        tourney.events.length ?
          tourney.events.map(e => <EventCard event={e} key={e._id} history={history}/>)
          :
          current ?
            <h4 className='heading'>No Events for {tourney.name} Created Yet</h4>
            :
            <h4 className='heading'>The {tourney.name} Is No Longer Current</h4>
        :
          <h4 className='heading'>No Tourney Selected</h4>
      }
      { eventFormMode === 'NEW' && <NewEventModal/> }
      { eventFormMode === 'EDIT' && <EditEventModal/> }
    </div>
  );
}

export default connect(
  (state) => ({
    tourney: state.tourneysState.selected,
    eventFormMode: state.eventsState.eventFormMode
  }), {

  }
)(EventList);