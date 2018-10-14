import React from "react";

const getTimings = (timestamp, type)=>{
  type = type || 'time';
  let time = new Date(timestamp);
  return type === 'time' ? <strong>{time.getHours()}:{time.getMinutes()}</strong> : <small>{time.toLocaleString("en-US", { weekday: 'short', month: 'short', day: 'numeric'})}</small>;

};

const FlightTime = ({timestamp, type}) => {
  return(
          <h5>{getTimings(timestamp, type)}</h5>
      )
};

export default FlightTime;
