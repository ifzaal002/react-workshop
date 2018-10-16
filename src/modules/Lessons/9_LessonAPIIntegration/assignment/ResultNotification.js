import React from 'react';
import './ResultNotification.css'

const ResultNotification = ({filteredResultsCount, resultsCount}) => {
  const resultsFound = filteredResultsCount > 0;
  return (
      <div className="notification-box">
        {resultsFound ?
            <span className="notification">Showing {filteredResultsCount} out of {resultsCount} results!</span> :
            <span className="notification">No results found!</span>
        }
      </div>

  )
};

export default ResultNotification;
