import React from 'react';
import PropTypes from 'prop-types';
import ResultsCard from "./ResultCard";

const ResultsList = ({results}) => {
  return (
      <div className="results-list">
        {
          results.map((result) =>
              <ResultsCard result={result} key={result.code}/>
          )
        }
      </div>
  )
};

ResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object)
};

export default ResultsList;
