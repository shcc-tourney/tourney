import React from 'react';

export default ({ competitors, tourneyCompetitors }) => {
  return (
    <article className='card'>
      <div className="card-content">
        <span className="card-title">Competitors Enabled for Event</span>
        {!competitors.length && <h5 className='card-message'>There are no enabled competitors</h5>}
        {competitors.map(c => {
          let comp = tourneyCompetitors.find(tc => tc._id === c);
          return (
            <div className="chip" key={c}>
              <div className="competitor-badge">{comp.competitorNo}</div> {comp.name}
            </div>
          );
        })}
      </div>
    </article>
  );
};
