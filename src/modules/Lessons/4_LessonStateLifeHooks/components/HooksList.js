import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontColor: 'red',
      countries: [],
      isLoading: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({fontColor:nextProps.fontColor});
    if (this.state.countries !== nextProps.countries) {
      this.setState({countries: nextProps.countries, isLoading: !nextProps.countries});
    }

  }

  render() {
    const {countries, fontColor, isLoading} = this.state;
    return isLoading ? <h3>Loading......</h3> : (
        <ul className="countries-list">
          {
            countries.map(country => <li key={country.value} style={{color: fontColor}}>{country.label}</li>)
          }
        </ul>
    );
  }

}

HooksList.propTypes = {
  fontColor: PropTypes.string,
  countries: PropTypes.arrayOf(PropTypes.object),
};

export default HooksList;
