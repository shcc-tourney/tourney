import React from 'react';
import { connect } from 'react-redux';

const EventCompetitorSelector = ({ onSelectCompetitor, selectedCompetitors, allCompetitors }) => {
  function onCompetitorClicked(){}
  
  let competitors = allCompetitors.filter(c => !selectedCompetitors.some(sc => sc.competitor === c._id));
  return (
    <article className='card'>
      <div className="card-content">
        <span className="card-title">Tourney's Competitors Available to Enable for Event (click to assign)</span>
        { !competitors.length && <h5 className='card-message'>There are no unassigned competitors</h5> }
        { competitors.map(c =>
          <div className="chip clickable" key={c._id} onClick={() => onSelectCompetitor(c._id)}>
            <div className="competitor-badge">{c.competitorNo}</div> {c.name}
          </div>
        )}
      </div>
    </article>
  );
}

export default connect(
  (state) => ({
  }),
  {
  }
)(EventCompetitorSelector);
