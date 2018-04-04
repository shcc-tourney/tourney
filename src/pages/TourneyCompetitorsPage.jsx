import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TourneyCompetitorsPage.css';
import { apiReq } from '../redux/actions/actionCreatorsAPI';
import { setCompetitors } from '../redux/actions/actionCreatorsCompetitors';
import { isPending } from '../utils/appLogicTourney';
import CompetitorSelector from '../components/CompetitorSelector';

class TourneyCompetitorsPage extends Component {
  componentDidMount() {
    // fetch competitors if has not been done yet,
    // then, competitors state will be updated in realtime
    // UPDATE_COMPETITORS
    if (!this.props.allCompetitors.length && this.props.tourney) {
      this.props.apiReq({
        url: '/api/competitors',
        successActionCreator: setCompetitors
      });
    }
  }

  render() {
    let title = this.props.tourney ? this.props.tourney.name : 'No Active Tourney';
    return (
      <div className='TourneyCompetitorsPage'>
        <h5 className='center-align'>Assign Competitors to Tourney - <span className={this.props.tourney ? '' : 'error-text'}>{title}</span></h5>
          <CompetitorSelector
            selectedCompetitors={this.props.tourney && this.props.tourney.competitors}
            allCompetitors={this.props.allCompetitors}
          />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tourney: state.tourneysState.current
      && isPending(state.tourneysState.current)
      && state.tourneyState.current,
    allCompetitors: state.competitorsState.all
  }),
  {
    apiReq
  }
)(TourneyCompetitorsPage);