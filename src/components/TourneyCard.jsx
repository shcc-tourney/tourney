import React from 'react';
import './TourneyCard.css';
import { numDays as tourneyNumDays } from '../utils/appLogicTourney';
import { formatDateRange } from '../utils/utilities';

const TourneyCard = ({tourney}) => {
  let numDays = tourneyNumDays(tourney);
  return (
    <article className = "TourneyCard card hoverable" >
      <div className="card-content">
        <span className="card-title">{tourney.name}</span>
        <dl>
          <dt>Dates</dt>
          <dd>{formatDateRange(tourney.startDate, tourney.endDate, true)}</dd>
          { (numDays > 1) &&
            <React.Fragment>
              <dt># Days</dt>
              <dd>{numDays}</dd>
            </React.Fragment>
          }
        </dl>
      </div>
    </article >
  );
};

export default TourneyCard;