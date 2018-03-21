import React from 'react';
import EventForm from './EventForm';

const NewEventModal = (props) => (
  <div id="create-event-modal" className="modal">
    <div className="modal-content">
      <h4>Create Event</h4>
      <EventForm/>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
);

export default NewEventModal;