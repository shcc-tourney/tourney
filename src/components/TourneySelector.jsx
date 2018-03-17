import React from 'react';
import './TourneySelector.css';
import TourneyCard from './TourneyCard';

const TourneySelector = ({ curTourney, prevTourneys, selectedTourney }) => {
  return (
    <div className='TourneySelector col-section'>
      <div className='section-title'>CURRENT TOURNEY</div>
      { curTourney ?
        <TourneyCard selected={curTourney === selectedTourney} tourney={curTourney}/>
      :
        <div className="TourneySelector-no-data">
          <p>There is no upcoming tourney</p>
          <button className='btn-small'>Create Tourney</button>
        </div>
      }
      <div className='section-title TourneySelector-Previous'>PREVIOUS TOURNEYS</div>
      {prevTourneys.length ?
        prevTourneys.map(t => <TourneyCard tourney={t} key={t._id} />)
        :
        <div className="TourneySelector-no-data">
          <p>There are no previous tourneys</p>
        </div>
      }
    </div>
  );
};

export default TourneySelector;