import React from 'react';
import './TourneyCard.css';
import { numDays as tourneyNumDays, isPending } from '../utils/appLogicTourney';
import { formatDateRange } from '../utils/utilities';

const TourneyCard = ({tourney, selected}) => {
  let numDays = tourneyNumDays(tourney);
  return (
    <article className={`TourneyCard card ${selected ? 'active': 'hoverable'}`} >
      <div className="card-content">
        <span className="card-title">{tourney.name}
          {isPending(tourney) && <a href="" className="secondary-content"><i className="material-icons">edit</i></a>}
        </span>
        <dl>
          <dt>Dates</dt>
          <dd>{formatDateRange(tourney.startDate, tourney.endDate, true)}</dd>
          { (numDays > 1) &&
            <React.Fragment>
              <dt># Days</dt>
              <dd>{numDays}</dd>
            </React.Fragment>
          }
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
        <a href="">Competitors<span data-badge-caption='' className='badge'>{tourney.competitors.length}</span></a>
      </div>
    </article >
  );
};

export default TourneyCard;