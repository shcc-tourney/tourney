import React from 'react';
import EventForm from './EventForm';

const NewEventModal = (props) => {
  function closeModal(e) {
    e.preventDefault();
  }

  return (
    <div id="new-event-modal" className="modal">
      <div className="modal-content">
        <h4>Create Event</h4>
        <EventForm/>
      </div>
      <div className="modal-footer">
        <a href="" onClick={closeModal} className="modal-action modal-close btn-flat">Create Event</a>
      </div>
    </div>
  );
};

export default NewEventModal;