import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CompetitorsPage.css';
import { apiReq } from '../redux/actions/actionCreatorsAPI';
import { setCompetitors } from '../redux/actions/actionCreatorsCompetitors';

class CompetitorsPage extends Component {
  componentDidMount() {
    // fetch competitors if has not been done yet,
    // then, competitors state will be updated in realtime
    // UPDATE_COMPETITORS
    if (!this.props.competitors.length) {
      this.props.apiReq({
        url: '/api/competitors',
        successActionCreator: setCompetitors
      });
    }
  }

  render() {
    return (
      <div className='CompetitorsPage'>
        <p>Competitiors Page</p>
        {/* <CompetitorList competitors={this.props.competitors} /> */}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    competitors: state.competitorsState.all
  }),
  {
    apiReq
  }
)(CompetitorsPage);