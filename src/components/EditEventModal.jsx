import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import { setEditEvent } from '../redux/actions/actionCreatorsEvents';
import { uiToast } from '../redux/actions/actionCreatorsUI';

class EditEventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editEvent: props.editEvent
    };
  }

  updateEditEventField = (field, val) => {
    this.setState(prevState => ({
      editEvent: {...prevState.editEvent, [field]: val}
    }));
  }

  cancelEdit = (e) => {
    e.preventDefault();
    this.modalInstance.close();
    this.props.setEditEvent(null);
  }

  saveChanges = (e) => {
    e.preventDefault();
    if (!this.EditForm.formEl.checkValidity()) {
      this.props.uiToast({ html: 'Please ensure all fields have valid data', classes: 'toast-error' });
      return;
    }
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
          <EventForm ref={_frm => this.EditForm = _frm} tourney={this.props.tourney}
            event={this.state.editEvent} updateEditEventField={this.updateEditEventField}
          />
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
    editEvent: state.eventsState.editEvent,
    tourney: state.tourneysState.selected,
  }),
  {
    setEditEvent,
    uiToast
  }
)(EditEventModal);