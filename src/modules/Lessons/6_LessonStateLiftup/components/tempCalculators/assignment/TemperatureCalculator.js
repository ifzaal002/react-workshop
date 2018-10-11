import React from 'react';
import TemperatureSensor from "./TemperatureSensor";
import TemperatureStatus from "./TemperatureStatus";

const TEMPERATURE_UNITS = {
  CELSIUS: 'CELSIUS',
  FAHRENHEIT: 'FAHRENHEIT'
};

class TemperatureCalculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      temperatureFahrenheit: '',
      temperatureCelsius: ''
    }
  }

  onTemperatureChange = (temperatureValue, temperatureUnit) => {
    if (isNaN(parseInt(temperatureValue))) {
      this.setState({temperatureFahrenheit: '', temperatureCelsius: ''});
    } else if (temperatureUnit === TEMPERATURE_UNITS.FAHRENHEIT) {
      this.setState({temperatureFahrenheit: temperatureValue, temperatureCelsius: this.fromFtoC(temperatureValue)});
    } else if (temperatureUnit === TEMPERATURE_UNITS.CELSIUS) {
      this.setState({temperatureFahrenheit: this.fromCtoF(temperatureValue), temperatureCelsius: temperatureValue});
    }
  };

  fromCtoF = (temperature) => {
    return (temperature * 9 / 5) + 32;
  };

  fromFtoC = (temperature) => {
    return (temperature - 32) * 5 / 9;
  };


  render() {
    const {temperatureCelsius, temperatureFahrenheit} = this.state;
    return (
        <section className="lesson-calculator info-panel">
          <h2>Temperature Calculator</h2>
          <div className="form-holder">
            <TemperatureSensor temperature={temperatureCelsius} temperatureUnit={TEMPERATURE_UNITS.CELSIUS}
                               onTemperatureChange={this.onTemperatureChange}/>
            <TemperatureSensor temperature={temperatureFahrenheit} temperatureUnit={TEMPERATURE_UNITS.FAHRENHEIT}
                               onTemperatureChange={this.onTemperatureChange}/>
          </div>
          <TemperatureStatus temperatureCelsius={temperatureCelsius}/>
        </section>
    )
  }

}

export default TemperatureCalculator;
