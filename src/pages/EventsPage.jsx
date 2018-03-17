import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EventsPage.css';
import TourneySelector from '../components/TourneySelector';
import EventList from '../components/EventList';
import { apiReq } from '../redux/actions/actionCreatorsAPI';
import { setPastTourneys } from '../redux/actions/actionCreatorsTourneys';

class EventsPage extends Component {
  componentDidMount() {
    this.props.apiReq({
      url: '/api/tourneys/past',
      successActionCreator: setPastTourneys
    });
  }
  render() {
    return (
      <div className='EventsPage'>
        <TourneySelector
          curTourney={this.props.curTourney}
          prevTourneys={this.props.prevTourneys}
          selectedTourney={this.props.selectedTourney}
        />
        <EventList tourney={this.props.selectedTourney}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    curTourney: state.tourneyState.current,
    prevTourneys: state.tourneyState.previous,
    selectedTourney: state.tourneyState.current || (state.tourneyState.previous.length && state.tourneyState.previous) || null
  }),
  {
    apiReq
  }
)(EventsPage);