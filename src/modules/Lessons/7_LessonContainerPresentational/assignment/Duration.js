import React from "react";


const getDuration = (duration) => {
  let hours = parseInt(duration / 60),
      minutes = duration % 60;
  return (<span>{hours} hour {minutes} minutes</span>);

};

const Duration = ({duration}) => {
  return (
      <div className="row">
        <div className="col-xs-12">
          <strong>Duration</strong>
          <h5>{getDuration(duration)}</h5>
        </div>
      </div>
  )
};

export default Duration;
