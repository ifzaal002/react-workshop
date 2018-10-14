import React from 'react';
import Label from "./Label";
import PropTypes from 'prop-types';

const SelectInput = (props) => {
  const {name, id, label, value, onChange, options} = props;
  return (
      <div className="form-group">
        <Label name={name} label={label}/>
        <div className="col-xs-5">
          <select
              id={id}
              onChange={onChange}
              name={name}
              value={value}
              className="form-control"
          >
          {
            options.map(({label, value: val}) => <option key={val} value={val}>{label}</option>)
          }
          </select>
        </div>
      </div>

  )
};

PropTypes.protoType = {
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string.isRequired
};

export default SelectInput;
