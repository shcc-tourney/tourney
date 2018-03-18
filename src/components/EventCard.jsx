import React from 'react';
import './EventCard.css';
import { connect } from 'react-redux';
import { setSelectedTourney } from '../redux/actions/actionCreatorsTourneys';

const EventCard = ({ event }) => {
  return (
    <article className='EventCard card'>
      <div className="card-content">
        <span className="card-title">{event.title}
          {/* {logic to check if event is OPEN && <a href="" className="secondary-content"><i className="material-icons">edit</i></a>} */}
        </span>
        <dl>
          <dt>Date</dt>
          <dd>{event.date.toDateString()}</dd>
          <hr/>
        </dl>
      </div>
      <div className="card-action">
        <a href="">Competitors<span data-badge-caption='' className='badge'>get #</span></a>
      </div>
    </article>
  );
};

export default connect(
  null,
  {
  
  }
)(EventCard);