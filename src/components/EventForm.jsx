import React, { Component } from 'react';
import { numDays } from '../utils/appLogicTourney';

class EventForm extends Component {
  componentDidMount() {
    setTimeout(() => document.getElementById('title').focus());
  }
  render() {
    let tourneyDays = numDays(this.props.tourney);
    let start = this.props.tourney.startDate;
    let dayCheckboxes = [];
    let selectedDate = this.props.event.resultsDate.toDateString();
    for (let dayOffset = 0; dayOffset < tourneyDays; dayOffset++) {
      let dt = new Date(start.getFullYear(), start.getMonth(), start.getDate() + dayOffset);
      dayCheckboxes.push(
        <p key={dayOffset}>
          <label>
            <input name="resultsDate" className='with-gap' type="radio" value={dt.toDateString()}
              checked={dt.toDateString() === selectedDate}
              onChange={(e) => this.props.updateEditEventField('resultsDate', new Date(e.target.value))}
            />
            <span>{dt.toDateString()}</span>
          </label>
        </p>
      );
    }
    return (
      <form ref={_frm => this.formEl = _frm} autoComplete='off' className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id='title' type='text' className="validate" pattern='.+' required
              value={this.props.event.title} onChange={(e) => this.props.updateEditEventField('title', e.target.value)}
            />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6">
            <span className='group-heading'>Results Available On Date</span>
            {dayCheckboxes}
          </div>
          <div className="input-field col s12 m6">
            <span className='group-heading'>Payout Positions</span>
            <p>
              <label>
                <input name="payoutPositions" className='with-gap' type="radio" value='1'
                  checked={this.props.event.payoutPositions === 1}
                  onChange={(e) => this.props.updateEditEventField('payoutPositions', parseInt(e.target.value, 10))}
                />
                <span>Win</span>
              </label>
            </p>
            <p>
              <label>
                <input name="payoutPositions" className='with-gap' type="radio" value='2'
                  checked={this.props.event.payoutPositions === 2}
                  onChange={(e) => this.props.updateEditEventField('payoutPositions', parseInt(e.target.value, 10))}                />
                <span>Win & Place</span>
              </label>
            </p>
            <p>
              <label>
                <input name="payoutPositions" className='with-gap' type="radio" value='3'
                  checked={this.props.event.payoutPositions === 3}
                  onChange={(e) => this.props.updateEditEventField('payoutPositions', parseInt(e.target.value, 10))}                />
                <span>Win, Place & Show</span>
              </label>
            </p>
          </div>
        </div>
        <div className="row col s12 m6">
          <div className="col s12 group-heading">
            Bet Restrictions
            {this.props.numWagers ? ' (changes do not impact existing wagers)' : ''}
          </div>
          <div className="input-field col s4">
            <input id='betMin' type='text' className="validate" pattern='\d+' required
              value={this.props.event.betMin} onChange={(e) => this.props.updateEditEventField('betMin', e.target.value)}
            />
            <label htmlFor="betMin" className='active'>Minimum</label>
          </div>
          <div className="input-field col s4">
            <input id='betMax' type='text' className="validate" pattern='\d+' required
              value={this.props.event.betMax} onChange={(e) => this.props.updateEditEventField('betMax', e.target.value)}
            />
            <label htmlFor="betMax" className='active'>Maximum</label>
          </div>
          <div className="input-field col s4">
            <input id='betInc' type='text' className="validate" pattern='\d+' required
              value={this.props.event.betInc} onChange={(e) => this.props.updateEditEventField('betInc', e.target.value)}
            />
            <label htmlFor="betInc" className='active'>Increment</label>
          </div>
        </div>
      </form>
    );
  }
}

export default EventForm;