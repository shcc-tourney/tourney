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
        <TourneySelector/>
        <EventList/>
      </div>
    );
  }
}

export default connect(
  null,
  {
    apiReq
  }
)(EventsPage);