import React from 'react';
import { connect } from 'react-redux';
import './EventSelector.css';
import { rtTest } from '../redux/actions/actionCreatorsRealtimeResponse';

const EventSelector = (props) => {
  return (
    <div className='EventSelector col-section'>
      <div className='section-title'>SELECT EVENT</div>
      <div className='EventSelector-top-controls'>
        <button onClick={props.rtTest} className="btn-small waves-light waves-effect"><i className="material-icons  left">add</i>Tourney</button>
      </div>
      <section>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Event Title</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <button className="btn-small waves-light waves-effect"><i className="material-icons  left">add</i>Event</button>
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
}

export default connect(
  (state) => ({
    
  }),
  {
    rtTest
  }
)(EventSelector);