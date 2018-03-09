import React from 'react';
import './TourneySelector.css';
import TourneyCard from './TourneyCard';

const TourneySelector = ({ curTourney }) => {
  return (
    <div className='TourneySelector col-section'>
      <div className='section-title'>CURRENT TOURNEY</div>
      { curTourney ?
        <TourneyCard tourney={curTourney}/>
      :
        <div className='TourneySelector-top-controls'>
          <p>No Current Tourney</p>
          <button className="btn-small waves-light waves-effect"><i className="material-icons  left">add</i>New Tourney</button>
        </div>
      }
      <div className='section-title TourneySelector-Previous'>PREVIOUS TOURNEYS</div>
      <section>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Event Title</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <a href="">This is a link</a>
            <a href="">This is a link</a>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Event Title</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <a href="">This is a link</a>
            <a href="">This is a link</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourneySelector;