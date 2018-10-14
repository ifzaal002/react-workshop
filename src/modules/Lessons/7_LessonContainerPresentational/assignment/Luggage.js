import React from "react";

const Luggage = (props) => {
  const {pieces, weight, unit} = props.bagage;
  return(
      <span>{pieces} pc(s), {weight} {unit}</span>
  )
};

export default Luggage;
