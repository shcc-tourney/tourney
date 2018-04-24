import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { setCompetitorFormMode } from '../redux/actions/actionCreatorsCompetitors';
import { uiToast } from '../redux/actions/actionCreatorsUI';
import { createCompetitor } from '../utils/competitorService';
import CompetitorForm from './CompetitorForm';

class NewCompetitorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  updateCompetitorField = (field, val) => {
    this.setState({[field]: val});
  }
  createCompetitor = (e) => {
    e.preventDefault();
    createCompetitor(this.state.name, (msgObj) => {
      if (msgObj.msg) this.props.uiToast({ html: 'Competitor created successfully', classes: 'toast-success' });
    });
    this.props.setCompetitorFormMode(null);
    this.modalInstance.close();
  }
  cancelModal = (e) => {
    e.preventDefault();
    this.props.setCompetitorFormMode(null);
    this.modalInstance.close();
  }
  componentDidMount() {
    this.modalInstance = window.M.Modal.init(this.modalEl, {});
    this.modalInstance.open();
  }
  render() {
    return (
      <div ref={modal => this.modalEl = modal} id="new-competitor-modal" className="modal">
        <div className="modal-content">
          <h4>Create Competitor</h4>
          <CompetitorForm name={this.state.name} updateCompetitorField={this.updateCompetitorField}/>
        </div>
        <div className="modal-footer">
          <a href="" onClick={this.cancelModal} className="btn-flat">cancel</a>
          <a href="" onClick={this.createCompetitor} className="btn-flat">save competitor</a>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    setCompetitorFormMode,
    uiToast
  }
)(NewCompetitorModal);