import React from 'react';
import PropTypes from 'prop-types';
import ImageThumb from "./ImageThumb";
import Stops from "./Stops";
import Duration from "./Duration";
import Fare from "./Fare";
import './SearchResults.css'
import Location from "./Location";
import FlightTime from "./FlightTime";
import Plane from "./Plane";
import FlightDetails from "./FlightDetails";

class ResultsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: props.result,
      showDetails: false,
      btnText: 'View Details'
    }
  }

  onViewDetailBtnClick = (e)=> {
    const showDetails = !this.state.showDetails;
    this.setState({showDetails: showDetails, btnText: showDetails ? 'Hide Details' : 'View Details'})
  };

  getFlightDetails() {
    if (this.state.showDetails) {
      return <FlightDetails result={this.state.result}/>
    } else {
      return '';
    }
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="panel grey-panel">
            <div className="panel-body">
              <div className="row border">
                <div className="col-xs-9">
                  <div className="row">
                    <div className="col-xs-3 text-center">
                      <ImageThumb/>
                    </div>
                    <div className="col-xs-4 text-center">
                      <div className="row">
                        <div className="col-xs-4">
                          <Location location={this.state.result.details.departure}/>
                          <FlightTime timestamp={this.state.result.details.departureDate}/>
                        </div>
                        <div className="col-xs-4">
                          <Plane/>
                        </div>
                        <div className="col-xs-4">
                          <Location location={this.state.result.details.arrival}/>
                          <FlightTime timestamp={this.state.result.details.arrivalDate}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3 text-center">
                      <Duration duration={this.state.result.duration}/>
                    </div>
                    <div className="col-xs-2 text-center">
                      <Stops stops={this.state.result.stops}/>
                    </div>
                  </div>
                </div>
                <div className="col-xs-1 text-center vertical-line"/>
                <div className="col-xs-2 text-center">
                  <div className="row">
                    <div className="col-xs-10">
                      <Fare totalTax={this.state.result.priceDetails.totalTax}
                            totalFare={this.state.result.priceDetails.totalFare}/>
                    </div>
                    <div className="col-xs-10">
                      <button className="btn btn-warning" onClick={this.onViewDetailBtnClick}>{this.state.btnText}</button>
                    </div>
                  </div>
                </div>
              </div>
              {this.getFlightDetails()}
            </div>
          </div>
        </div>
    )
  }
}

ResultsCard.propTypes = {
  result: PropTypes.object
};

export default ResultsCard;
