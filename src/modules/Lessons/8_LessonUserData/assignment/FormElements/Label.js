import React from "react";

const Label = ({name, label, children, className}) =>{
    className = className || 'col-xs-2';
    return (
        <label htmlFor={name} className={className}>
          {children}{label}
        </label>
    )
};

export default Label;
