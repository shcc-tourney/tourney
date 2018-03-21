import React, { Component } from 'react';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      date: props.date,
      payoutPositions: props.payoutPositions,
      minBet: props.minBet,
      maxBet: props.maxBet,
      incBet: props.incBet
    };
  }

  updateField = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  componentDidMount() {
    window.$('.datepicker').datepicker({closeOnSelect: true});
  }

  render() {
    return (
      <form ref={frm => this.form = frm} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id='title' className="validate" autoComplete="off" required
              value={this.state.title} onChange={(e) => this.updateField('title', e)}
            />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id='date' type='text' className="datepicker" required
              value={this.state.date} onChange={(e) => this.updateField('date', e)}
            />
            <label htmlFor="date">Date</label>
          </div>
        </div>
        <dt>Date</dt>
        <dd><input name='date' /></dd>
        <dt>Payout Positions</dt>
        <dd><input name='payoutPositions' /></dd>
        <dt>Min Bet / Max Bet / Inc Bet</dt>
        <dd><input name='minBet' /><span>&nbsp;&nbsp;/&nbsp;&nbsp;</span><input name='maxBet' /><span>&nbsp;&nbsp;/&nbsp;&nbsp;</span><input name='incBet' /></dd>
      </form>
    );
  }
}

export default EventForm;