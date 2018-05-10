import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventCompetitorList from '../components/EventCompetitorList';
import EventCompetitorSelector from '../components/EventCompetitorSelector';
import { assignCompetitorToEvent } from '../utils/tourneyService';

class EventCompetitorsPage extends Component {
  assignCompetitor = (competitorId) => {
    assignCompetitorToEvent(this.props.event._id, competitorId);
  }
  render() {
    var { event, tourney } = this.props;
    if (!event) {
      setTimeout(() => this.props.history.push('/events'), 100);
      return null;
    }
    return (
      <div className='page'>
        <div className='col-section'>
          <div className='section-title large'>Assign Competitors to Event - <span>{event.title} ({tourney.name})</span></div>
          <EventCompetitorList
            tourneyCompetitors={tourney.competitors}
            competitors={event.competitors}
          />
          <EventCompetitorSelector
            onSelectCompetitor={this.assignCompetitor}
            selectedCompetitors={event.competitors}
            allCompetitors={tourney.competitors}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tourney: state.tourneysState.selected,
    event: state.eventsState.workingEvent
  }),
  {
  }
)(EventCompetitorsPage);