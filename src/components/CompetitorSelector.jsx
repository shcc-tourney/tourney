import React from 'react';
import { connect } from 'react-redux';
import NewCompetitorModal from './NewCompetitorModal';
import { setCompetitorFormMode } from '../redux/actions/actionCreatorsCompetitors';

const CompetitorSelector = ({ title, onSelectCompetitor, selectedCompetitors, allCompetitors, competitorFormMode, setCompetitorFormMode }) => {
  let competitors = allCompetitors.filter(c => !selectedCompetitors.some(sc => sc.competitor === c._id));
  return (
    <article className='card'>
      <div className="card-content">
        <span className="card-title">{title}</span>
        { !competitors.length && <h5 className='card-message'>There are no unassigned competitors</h5> }
        { competitors.map(c =>
          <div className="chip clickable" key={c._id} onClick={() => onSelectCompetitor(c._id)}>
            {c.name}
          </div>
        )}
      </div>
      <div className="card-action flex-row-between-ctr">
        { (competitors.length || '') && <h5 className='card-message flex4' style={{textAlign: 'left'}}>Please assign an EXISTING competitor before creating a new one</h5> }
        <div className='section-control-bar flex1'><button className='btn-small' onClick={() => setCompetitorFormMode('NEW') }>Create Competitor</button></div>
      </div>
      { competitorFormMode === 'NEW' && <NewCompetitorModal/> }
    </article>
  );
}

export default connect(
  (state) => ({
    competitorFormMode: state.competitorsState.competitorFormMode
  }),
  {
    setCompetitorFormMode
  }
)(CompetitorSelector);
