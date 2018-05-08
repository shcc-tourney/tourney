import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedTourney } from '../redux/actions/actionCreatorsTourneys';
import { isPending } from '../utils/appLogicTourney';
import TourneyCompetitorList from '../components/TourneyCompetitorList';
import CompetitorSelector from '../components/CompetitorSelector';
import { assignCompetitorToTourney } from '../utils/tourneyService';

class TourneyCompetitorsPage extends Component {
  componentDidMount() {
    if (!this.props.tourney) return;
    // Set the selected tourney to tourneyId in the route
    this.props.setSelectedTourney(this.props.match.params.tourneyId);
  }
  assignCompetitor = (competitorId) => {
    assignCompetitorToTourney(this.props.tourney._id, competitorId);
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
          <TourneyCompetitorList
            competitors={tourney.competitors}
            onCompetitorClicked={''}
          />
          { active &&
            <CompetitorSelector
              title='Previous Competitors Available to Assign to Tourney (click to assign)'
              onSelectCompetitor={this.assignCompetitor}
              selectedCompetitors={tourney.competitors}
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
    setSelectedTourney
  }
)(TourneyCompetitorsPage);