import React from "react";

const CountryList = ({countries}) => {
  return (
      <div className="lesson-container">
        <h3>Countries</h3>
        <ul className="countries-list color-success">
          {
            countries.map(country => <li key={country.value}>{country.label}</li>)
          }
        </ul>
      </div>
  );
};

export default CountryList;
