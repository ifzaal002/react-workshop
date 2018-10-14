import React from 'react';
import Label from "./Label";

const TextInput = (props) => {
  const {name, id, label, value, placeHolder, onChange} = props;
  return (
      <div className="form-group">
        <Label name={name} label={label}/>
        <div className="col-xs-5">
          <input
              id={id}
              value={value || ''}
              name={name}
              onChange={onChange}
              type='text'
              className="form-control"
              placeholder={placeHolder}
          />
        </div>
      </div>

  )
};

export default TextInput;
