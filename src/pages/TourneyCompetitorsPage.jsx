import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiReq } from '../redux/actions/actionCreatorsAPI';
import { setSelectedTourney } from '../redux/actions/actionCreatorsTourneys';
import { isPending } from '../utils/appLogicTourney';
import TourneyCompetitorList from '../components/TourneyCompetitorList';
import CompetitorSelector from '../components/CompetitorSelector';

class TourneyCompetitorsPage extends Component {
  componentDidMount() {
    if (!this.props.tourney) return;
    // Set the selected tourney to tourneyId in the route
    this.props.setSelectedTourney(this.props.match.params.tourneyId);
  }

  render() {
    var { tourney } = this.props;
    if (!tourney) return null;
    let active = isPending(tourney);
    let title = active ?
      <div className='section-title large'>Assign Competitors to Tourney - <span>{tourney.name}</span></div>
      : 
      <div className='section-title large'>Competitors of <span>{tourney.name}</span> (past tourney)</div>;
    return (
      <div className='page'>
        <div className='col-section'>
          {title}
          <TourneyCompetitorList/>
          { active &&
            <CompetitorSelector
              title='Previous Competitors Available to Assign to Tourney'
              onSelectCompetitor={''}
              selectedCompetitors={this.props.tourney.competitors}
              allCompetitors={this.props.allCompetitors}
            />
          }
        </div>
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