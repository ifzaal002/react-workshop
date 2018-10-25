import React from 'react';

import './ErrorMsg.css'

const ErrorMsg = ({error})=>{
  return (
      <div className="text-center">
        <h3>Error occurred while fetching data!</h3>
        <span className="has-error">{error.toString()}</span>
      </div>
  )
};

export default ErrorMsg;
