import React, {Component} from 'react';

import COUNTRIES from '../../../../util/countries'
import Loader from "./Loader";
import CountryList from "./CountryList";
import NotFound from "./NotFound";
import ServerError from "./ServerError";


const DATA_VIEW_STATES = {
  LOADING: 'loading',
  READY: 'ready',
  RELOAD: 'reload',
  NOT_FOUND: 'not_found',
  SERVER_ERROR: 'server_error',
};

class DataView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataViewStatus: DATA_VIEW_STATES.LOADING,
      countries: []
    }

  };

  componentWillMount() {
    this.getCountries();
  };

  getCountries = () => {
    this.currentDataFetch = setTimeout(() => {
      this.setState({
        countries: COUNTRIES,
        dataViewStatus: COUNTRIES && COUNTRIES.length > 0 ? DATA_VIEW_STATES.READY : DATA_VIEW_STATES.NOT_FOUND
      });
    }, 5000)
  };

  updateStatus = (status) => {
    clearTimeout(this.currentDataFetch);
    if (status === DATA_VIEW_STATES.RELOAD) {
      this.setState({dataViewStatus: DATA_VIEW_STATES.LOADING});
      this.getCountries();
    } else {
      this.setState({dataViewStatus: status});
    }

  };

  getCurrentViewSet = () => {
    const {dataViewStatus, countries} = this.state;
    switch (dataViewStatus) {
      case  DATA_VIEW_STATES.LOADING:
        return <Loader/>;
      case DATA_VIEW_STATES.READY:
        return <CountryList countries={countries}/>;
      case DATA_VIEW_STATES.NOT_FOUND:
        return <NotFound/>;
      case DATA_VIEW_STATES.SERVER_ERROR:
        return <ServerError/>;
      default:
        return null;
    }

  };


  render() {
    return (
        <section className="lesson-conditional-render info-panel">
          <h2>Practice Conditional Rendering</h2>
          <div className="state-actions">
            <button onClick={this.updateStatus.bind(this, DATA_VIEW_STATES.NOT_FOUND)}>Simulate NotFound</button>
            <span> </span>
            <button onClick={this.updateStatus.bind(this, DATA_VIEW_STATES.SERVER_ERROR)}>Simulate ServerError
            </button>
            <span> </span>
            <button onClick={this.updateStatus.bind(this, DATA_VIEW_STATES.LOADING)}>Simulate Loading</button>
            <span> </span>
            <button onClick={this.updateStatus.bind(this, DATA_VIEW_STATES.RELOAD)}>Reload Data</button>
          </div>
          <div className="assignment-details">{this.getCurrentViewSet()}</div>
        </section>
    )
  };
}


export default DataView;
