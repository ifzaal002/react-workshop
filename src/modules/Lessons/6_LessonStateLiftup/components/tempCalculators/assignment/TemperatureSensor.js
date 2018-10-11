import React from 'react';
import PropTypes from "prop-types";

class TemperatureSensor extends React.Component{


  onInputChange(e){
    this.props.onTemperatureChange(e.target.value, this.props.temperatureUnit);
  };

  render(){
    return (
        <fieldset>
          <label>Please enter temperature in {this.props.temperatureUnit}</label>
          <input
              placeholder={`Enter value in ${this.props.temperatureUnit}`}
              value={this.props.temperature}
              onChange={this.onInputChange.bind(this)}/>
        </fieldset>
    )
  }

}


TemperatureSensor.propTypes = {
  temperatureUnit: PropTypes.string.isRequired,
  temperature: PropTypes.arrayOf([PropTypes.number, PropTypes.string]),
  onInputChange: PropTypes.func,
};


export default TemperatureSensor;
