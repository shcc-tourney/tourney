import React, { Component } from 'react';

class CompetitorForm extends Component {
  componentDidMount() {
    setTimeout(() => document.getElementById('name').focus());
  }
  render() {
    return (
      <form onSubmit={this.props.onEnter} autoComplete='off' className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id='name' type='text' className="validate" pattern='.+' required
              value={this.props.name} onChange={(e) => this.props.updateCompetitorField('name', e.target.value)}
            />
            <label htmlFor="name">Competitor's Name(s)</label>
          </div>
        </div>
      </form>
    );
  }
}

export default CompetitorForm;