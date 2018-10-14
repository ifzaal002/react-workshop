import Location from "./Location";
import FlightNumber from "./FlightNumber";
import FlightClass from "./FlightClass";
import Airline from "./Airline";
import Luggage from "./Luggage";
import React from "react";
import FlightTime from "./FlightTime";
import Plane from "./Plane";
import Duration from "./Duration";


const FlightDetails = (props) => {
  const result = props.result;
  return (
      <div className="panel-body">
        <div className="row">
          <div className="col-xs-2 text-center">
            <FlightTime timestamp={result.details.departureDate}/>
            <FlightTime timestamp={result.details.departureDate} type={'date'}/>
          </div>
          <div className="col-xs-1 text-center">
            <Plane/>
          </div>
          <div className="col-xs-2 text-center">
            <FlightTime timestamp={result.details.arrivalDate}/>
            <FlightTime timestamp={result.details.arrivalDate} type={'date'}/>
          </div>
          <div className="col-xs-2">
            <Duration duration={result.duration}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2"/>
          <div className="col-xs-1 text-center vertical-line"/>
          <div className="col-xs-3">
            <div><Location location={result.details.departure}/> to <Location location={result.details.arrival}/></div>
            <div><FlightNumber flightId={result.details.intervals[0].flightId}/></div>
            <div><FlightClass flightClass={result.details.intervals[0].class}/>, <Airline airline={result.airline}/></div>
            <div><Luggage bagage={result.details.bg_info}/></div>
          </div>
        </div>
      </div>
  )
};

export default FlightDetails;
