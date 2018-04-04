import React from 'react';

const CompetitorSelector = ({ selectedCompetitors, allCompetitors }) => {
  return (
    <div className='col-section'>
      <table className='responsive-table'>
        <thead>
          <tr>
            <th>Competitor Name(s)</th>
            <th>Previous Tourneys</th>
          </tr>
        </thead>
        <tbody>
          {allCompetitors.length ? 
            allCompetitors.map(c => 
              <p>{c.name}</p>
            )
          :
            <tr><td></td><td colSpan='3' className='error-text center-align'>No Competitors Exist</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default CompetitorSelector;