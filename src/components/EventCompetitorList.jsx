import React from 'react';

export default ({ competitors }) => {
  return (
    <article className='card'>
      <div className="card-content">
        <span className="card-title">Competitors Enabled for Event</span>
        {!competitors.length && <h5 className='card-message'>There are no enabled competitors</h5>}
        {competitors.map(c =>
          <div className="chip" key={c._id}>
            <div className="competitor-badge">{c.competitorNo}</div> {c.name}
          </div>
        )}
      </div>
    </article>
  );
};
