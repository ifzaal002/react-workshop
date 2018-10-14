import React from "react";

const  Stops = ({stops})=> {
    return (
        <div className="row">
          <div className="col-xs-12">
            <strong>Stops</strong>
            <h5>{stops}</h5>
          </div>
        </div>
    )
  };


export default Stops;
