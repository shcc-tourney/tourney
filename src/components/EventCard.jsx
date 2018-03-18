import React from 'react';
import './EventCard.css';
import { connect } from 'react-redux';
import { setSelectedTourney } from '../redux/actions/actionCreatorsTourneys';

const EventCard = ({ event }) => {
  let winningPositions = ['WIN', 'PLACE', 'SHOW']
  .slice(0, event.payoutPositions)
  .reduce((acc, pos, idx, arr) => {
    if (idx === 0) return pos;
    if (idx === arr.length - 1) return acc + ' & ' + pos;
    return acc + ', ' + pos;
  });
  return (
    <article className='EventCard card'>
      <div className="card-content">
        <span className="card-title">{event.title}
          {event.status === 'OPEN' && <a href="" className="secondary-content"><i className="material-icons">edit</i></a>}
        </span>
        <dl>
          <dt>Status</dt>
          <dd>{event.status}</dd>
          <dt>Date</dt>
          <dd>{event.date.toDateString()}</dd>
          <dt>Payout Positions</dt>
          <dd>{winningPositions}</dd>
          <dt>Min Bet / Max Bet / Inc Bet</dt>
          <dd>${event.betMin}<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>${event.betMax}<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>${event.betInc}</dd>
          <hr/>
          <dt># Wagers / $ Wagered</dt>
          <dd>5<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>$125</dd>
          <dt>Computed Payout&nbsp;&nbsp;/&nbsp;&nbsp;Actual</dt>
          <dd>$112<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>$98</dd>
          <dt>Computed Take&nbsp;&nbsp;/&nbsp;&nbsp;Actual</dt>
          <dd>$13<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>$27</dd>
        </dl>
      </div>
      <div className="card-action">
        <div>Change Status: <a href="">OPEN</a><a href="">CLOSE</a></div>
        <div><a href="">Competitors<span data-badge-caption='' className='badge'>get #</span></a></div>
        <a href="">Results<span data-badge-caption='' className='badge'>get #</span></a>
      </div>
    </article>
  );
};

export default connect(
  null,
  {
  
  }
)(EventCard);