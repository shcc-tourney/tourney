import React from 'react';

const CompetitorSelector = ({ title, onSelectCompetitor, selectedCompetitors, allCompetitors }) => {
  let competitors = allCompetitors.filter(c => !selectedCompetitors.some(sc => sc._id === c._id));
  let msg = competitors.length ?
    'Please assign an EXISTING competitor before creating a new one'
    :
    'There are no unassigned competitors';

  return (
    <article className='card'>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <h5 className='card-message'>{msg}</h5>
      </div>
      <div className="card-action">
        <div className='section-control-bar'><button className='btn-small'>Create Competitor</button></div>
      </div>
    </article>
  );
}

export default CompetitorSelector;