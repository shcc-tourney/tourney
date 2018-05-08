import React from 'react';
import './TourneyCompetitorList.css';

export default ({ competitors, onCompetitorClicked }) => {
  return (
    <article className='card'>
      <div className="card-content">
        <span className="card-title">Competitors Assigned to Tourney</span>
        {!competitors.length && <h5 className='card-message'>There are no assigned competitors</h5>}
        {competitors.map(c =>
          <div className="chip clickable" key={c._id} onClick={() => onCompetitorClicked(c._id)}>
            <div className="competitor-badge">{c.competitorNo}</div> {c.name}
          </div>
        )}
      </div>
    </article>
  );
};
