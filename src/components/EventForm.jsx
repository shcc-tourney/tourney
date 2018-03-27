import React, { Component } from 'react';

class EventForm extends Component {
  componentDidMount() {
    setTimeout(() => document.getElementById('title').focus());
  }
  render() {
    return (
      <form autoComplete='off' className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id='title' type='text' autoFocus className="validate" required
              value={this.props.event.title} onChange={(e) => this.props.updateEditEventField('title', e.target.value)}
            />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id='resultsDate' type='text' required
              value={this.props.event.resultDate} onChange={(e) => this.props.updateEditEventField('resultsDate', e.target.value)}
            />
            <label htmlFor="resultsDate">Results Available Date</label>
          </div>
        </div>
      </form>
    );
  }
}
    // <dt>Payout Positions</dt>
    // <dd><input name='payoutPositions' /></dd>
    // <dt>Min Bet / Max Bet / Inc Bet</dt>
    // <dd><input name='minBet' /><span>&nbsp;&nbsp;/&nbsp;&nbsp;</span><input name='maxBet' /><span>&nbsp;&nbsp;/&nbsp;&nbsp;</span><input name='incBet' /></dd>



export default EventForm;