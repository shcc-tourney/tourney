import React from 'react';
import './TourneyCard.css';
import { formatDateRange } from '../utils/utilities';

const TourneyCard = ({tourney}) => (
  <article className = "TourneyCard card hoverable" >
    <div className="card-content">
      <span className="card-title">{tourney.name}</span>
      <dl>
        <dt>Dates</dt>
        <dd>{formatDateRange(tourney.startDate, tourney.endDate)}</dd>
      </dl>
    </div>
  </article >
);

export default TourneyCard;