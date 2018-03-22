import React from 'react';
import './TourneySelector.css';
import TourneyCard from './TourneyCard';

const TourneySelector = ({ curTourney, prevTourneys }) => {
  return (
    <div className='TourneySelector col-section'>
      <div className='section-title'>CURRENT TOURNEY</div>
      {curTourney ?
        <TourneyCard tourney={curTourney} />
        :
        <div className="TourneySelector-no-data">
          <p>There is no upcoming tourney</p>
          <button className='btn-small'>Create Tourney</button>
        </div>
      }
      <div className='section-title TourneySelector-Previous'>PREVIOUS TOURNEYS</div>
      {prevTourneys.length ?
        <p>Need to map prevTourneys</p>
        :
        <div className="TourneySelector-no-data">
          <p>There are no previous tourneys</p>
        </div>
      }
    </div>
  );
};

export default TourneySelector;