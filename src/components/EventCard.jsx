import React from 'react';
import './EventCard.css';
import { connect } from 'react-redux';
import { setEditEvent } from '../redux/actions/actionCreatorsEvents';
import { todayWithoutTime } from '../utils/utilities';

const EventCard = ({ event, setEditEvent }) => {
  let winningPositions = ['WIN', 'PLACE', 'SHOW']
    .slice(0, event.payoutPositions)
    .reduce((acc, pos, idx, arr) => {
      if (idx === 0) return pos;
      if (idx === arr.length - 1) return acc + ' & ' + pos;
      return acc + ', ' + pos;
    });

  function showEditModal(e) {
    e.preventDefault();
    setEditEvent(event);
  }
    
  return (
    <article className='EventCard card'>
      <div className="card-content">
        <span className="card-title">{event.title}
          {event.status === 'OPEN' && <a href="" onClick={showEditModal} className="secondary-content"><i className="material-icons">edit</i></a>}
        </span>
        <dl>
          <dt>Status</dt>
          <dd>{event.status}</dd>
          <dt>Results Available Date</dt>
          <dd>{event.resultsDate.toDateString()}</dd>
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
          <hr/>
          <dt>Results</dt>
          { event.status === 'OPEN' ?
              <dd>Wagering still open...</dd>
            :
              event.status ==='CLOSED' ?
                <dd>Wagering is closed. Results pending...</dd>
              :
                <dd>
                  results go here
                </dd>
          }
          <hr/>
          <dt>Competitors</dt>
          { event.competitors.length ?
              <dd>
              competitors go here
              </dd>
            :
              <dd>No competitors assigned to this event yet</dd>
          }
        </dl>
      </div>
      <div className="card-action">
        { event.status === 'OPEN' ?
            <React.Fragment>
              <div><a href="">CHANGE EVENT STATUS TO <span>CLOSE</span> (NO MORE WAGERS)</a></div>
              <div><a href="">ADD/REMOVE COMPETITORS</a></div>
            </React.Fragment>
          :
           todayWithoutTime() <= event.resultsDate && <div><a href="">RE-OPEN EVENT FOR WAGERING</a></div>
        }
      </div>
    </article>
  );
};

export default connect(
  null,
  {
    setEditEvent
  }
)(EventCard);