import React from 'react';
import { connect } from 'react-redux';
import './TourneyCompetitorList.css';

const TourneyCompetitorList = (props) => {
  return (
    <article className='card'>
      <div className="card-content">
        <span className="card-title">Competitors Assigned to Tourney</span>
      </div>
    </article>
  );
};

export default connect(
  (state) => ({
    tourney: state.tourneysState.selected
  }),
  {
  }
)(TourneyCompetitorList);