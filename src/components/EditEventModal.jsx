import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import { setEditEvent } from '../redux/actions/actionCreatorsEvents';

class EditEventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editEvent: props.editEvent
    };
  }

  updateEditEventField = (field, val) => {
    this.setState({
      editEvent: {[field]: val}
    });
  }

  cancelEdit = (e) => {
    e.preventDefault();
    this.modalInstance.close();
    this.props.setEditEvent(null);
  }

  saveChanges = (e) => {
    e.preventDefault();
    this.modalInstance.close();
    this.props.setEditEvent(null);
  }

  componentDidMount() {
    if (!this.props.editEvent) return;
    this.modalInstance = window.M.Modal.init(this.modalEl, {});
    this.modalInstance.open();
  }

  render() {
    let ui = this.props.editEvent ?
      <div ref={modal => this.modalEl = modal} id="edit-event-modal" className="modal">
        <div className="modal-content">
          <h4>Edit Event</h4>
          <EventForm event={this.state.editEvent} updateEditEventField={this.updateEditEventField}/>
        </div>
        <div className="modal-footer">
          <a href="" onClick={this.cancelEdit} className="btn-flat">cancel</a>
          <a href="" onClick={this.saveChanges} className="btn-flat">save changes</a>
        </div>
      </div>
    :
      null;
    return ui;
  }
}

export default connect(
  (state) => ({
    editEvent: state.eventsState.editEvent
  }),
  {
    setEditEvent
  }
)(EditEventModal);