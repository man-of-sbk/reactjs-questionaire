import React from "react";

import { PropTypes } from "prop-types";

const NumberQues = ({
  className,
  name,
  label,
  index,
  onChange,
  value,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {index && `${index}.`} {label}
      </label>
      <input
        type={"number"}
        className={`form-control ${className}`}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      />
      <span className="input-error">{error !== undefined && error}</span>
    </div>
  );
};

NumberQues.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default NumberQues;
