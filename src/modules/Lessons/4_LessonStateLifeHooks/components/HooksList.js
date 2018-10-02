import React from 'react';
import PropTypes from 'prop-types';


const HooksList = ({countries, fontColor}) => {
  console.log("..... countries in HooksList .......", countries);
  console.log("..... fontColor .......", fontColor);
  const isLoading = !countries;

  return isLoading ? <h3>Loading......</h3> : (
      <ul className="countries-list">
        {
          countries.map(country => <li key={country.value} style={{color:fontColor}}>{country.label}</li>)
        }
      </ul>
  );

};

HooksList.propTypes = {
  fontColor: PropTypes.string,
  countries: PropTypes.arrayOf(PropTypes.object),
};

export default HooksList;
