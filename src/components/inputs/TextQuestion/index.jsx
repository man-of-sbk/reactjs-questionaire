/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
import React from "react";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const TextQues = ({
  className,
  name,
  label,
  index,
  onChange,
  inputValsState
}) => {
  const { error } = inputValsState[name];

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {index && `${index}.`}
        {label}
      </label>
      <input
        type="text"
        className={`form-control ${className}`}
        name={name}
        id={name}
        onChange={onChange}
      />
      <span className="input-error">{error !== undefined && error}</span>
    </div>
  );
};

TextQues.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  inputValsState: PropTypes.object
};

const mapStateToProps = (state) => ({
  inputValsState: state.surveyQuestion.inputVals
});

export default connect(mapStateToProps)(TextQues);
