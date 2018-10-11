import React from 'react';
import classNames from 'classnames';
import './TemperatureStatus.css'

const TemperatureStatus = ({temperatureCelsius}) => {
  const waterIsHot = temperatureCelsius >= 100;
  return (
      <span className={classNames({'boiling-notice': true, 'bold': waterIsHot})}>
        {
          waterIsHot ? 'Water has Boiled!' : 'Water is not hot enough..'
        }
      </span>
  )
};

export default TemperatureStatus;
