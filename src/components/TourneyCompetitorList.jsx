import React from 'react';
import './TourneyCompetitorList.css';

export default ({ competitors, onCompetitorClicked }) => {
  return (
    <article className='card'>
      <div className="card-content">
        <span className="card-title">Competitors Assigned to Tourney</span>
        {competitors.map(c =>
          <div className="chip clickable" key={c._id} onClick={() => onCompetitorClicked(c._id)}>
            {c.name}
          </div>
        )}
      </div>
    </article>
  );
};
