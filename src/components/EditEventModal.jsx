import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import { setEditEvent } from '../redux/actions/actionCreatorsEvents';
import { updateEvent } from '../utils/tourneyService';
import { uiToast } from '../redux/actions/actionCreatorsUI';

class EditEventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // limit the properties that can be edited
      editEvent: {
        _id: props.editEvent._id,
        title: props.editEvent.title,
        resultsDate: props.editEvent.resultsDate,
        payoutPositions: props.editEvent.payoutPositions,
        betInc: props.editEvent.betInc,
        betMin: props.editEvent.betMin,
        betMax: props.editEvent.betMax,
      }
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
  }
  
  saveChanges = (e) => {
    e.preventDefault();
    let { betMin, betMax, betInc } = this.state.editEvent; 
    if (!this.EditForm.formEl.checkValidity()) {
      this.props.uiToast({ html: 'Please ensure all fields have valid data', classes: 'toast-error' });
      return;
    } else if (betMin > betMax || betInc > (betMax - betMin)) {
      this.props.uiToast({ html: 'Please ensure all of the Bet Restrictions make sense', classes: 'toast-error' });
      return;
    } else {
      updateEvent(this.state.editEvent, (msgObj) => {
        if (msgObj.msg) this.props.uiToast({ html: 'Event updated successfully', classes: 'toast-success' });
      });
    }
    this.modalInstance.close();
  }

  componentDidMount() {
    if (!this.props.editEvent) return;
    this.modalInstance = window.M.Modal.init(this.modalEl, {
      onCloseEnd: () => {
        this.props.setEditEvent(null);
      }
    });
    this.modalInstance.open();
  }

  render() {
    let ui = this.props.editEvent ?
      <div ref={modal => this.modalEl = modal} id="edit-event-modal" className="modal">
        <div className="modal-content">
          <h4>Edit Event</h4>
          <EventForm ref={_frm => this.EditForm = _frm} tourney={this.props.tourney}
            numWagers={this.props.editEvent.wagers.length}
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