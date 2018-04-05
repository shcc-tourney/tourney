import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TourneyCompetitorsPage.css';
import { apiReq } from '../redux/actions/actionCreatorsAPI';
import { setSelectedTourney } from '../redux/actions/actionCreatorsTourneys';
import { setCompetitors } from '../redux/actions/actionCreatorsCompetitors';
import { isPending } from '../utils/appLogicTourney';
import CompetitorSelector from '../components/CompetitorSelector';

class TourneyCompetitorsPage extends Component {
  componentDidMount() {
    if (!this.props.tourney) return;
    // fetch competitors if has not been done yet,
    // then, competitors state will be updated in realtime
    // UPDATE_COMPETITORS
    console.log(this.props.match.params.tourneyId)

    // Set the selected tourney to tourneyId in the route
    this.props.setSelectedTourney(this.props.match.params.tourneyId);

    if (!this.props.allCompetitors.length && this.props.tourney) {
      this.props.apiReq({
        url: '/api/competitors',
        successActionCreator: setCompetitors
      });
    }
  }

  render() {
    var { tourney } = this.props;
    if (!tourney) return null;
    let active = isPending(tourney);
    let title = active ? 
        <h5 className='center-align'>Assign Competitors to Tourney - <span>{tourney.name}</span></h5>
      : 
        <h5 className='center-align'>Competitors of <span>{tourney.name}</span> (past tourney)</h5>;
    return (
      <div className='TourneyCompetitorsPage'>
        {title}
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
    tourney: state.tourneysState.selected,
    allCompetitors: state.competitorsState.all
  }),
  {
    setSelectedTourney,
    apiReq
  }
)(TourneyCompetitorsPage);