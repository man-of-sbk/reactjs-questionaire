import React from "react";

import { PropTypes } from "prop-types";
import { validMultipleInputAnswersObj } from "../../../utils/CustomPropTypes/validMultipleInputAnswersObj";

import CheckBoxInput from "./../../commons/CheckBoxInput/CheckBoxInput";

const CheckBoxQues = ({
  className,
  name,
  answers,
  label,
  index,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label className="form-label">
        {index && `${index}.`} {label}
      </label>
      {answers &&
        Array.isArray(answers) &&
        answers.map((answer, index) => (
          <CheckBoxInput
            key={index}
            label={answer.content}
            className={`radio-input-container ${className}`}
            name={name}
            value={answer.value}
            onChange={onChange}
          />
        ))}
      <span className="input-error">{error !== undefined && error}</span>
    </div>
  );
};

CheckBoxQues.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  answers: validMultipleInputAnswersObj,
  label: PropTypes.string.isRequired
};

export default CheckBoxQues;
