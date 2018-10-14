import React from 'react';
import Label from "./Label";
import PropTypes from 'prop-types';

const CompositeInput = (props) => {
  const {name, id, type, label, value, onChange, options} = props;
  return (
      <div className="form-group">
        <Label label={label}/>
        <div className="col-xs-5">

          {
            options.map(({label, value: val}) => {
              return (
                  <div key={val} className={type}>
                    <Label name={val} label={label} className='col-xs-6'>
                      <input id={val} onChange={onChange} type={type} name={name} value={val}
                             checked={typeof value === 'object' ? value.get(val) : value === val}/>
                    </Label>
                  </div>
              )
            })
          }
        </div>
      </div>

  )
};

PropTypes.protoType = {
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string.isRequired
};

export default CompositeInput;
