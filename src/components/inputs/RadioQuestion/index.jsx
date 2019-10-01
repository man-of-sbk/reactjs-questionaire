import React from "react";

import { PropTypes } from "prop-types";
import { validMultipleInputAnswersObj } from "../../../utils/CustomPropTypes/validMultipleInputAnswersObj";

const RadioQues = ({
  className,
  name,
  answers,
  label,
  index,
  onChange,
  value,
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
          <label key={index} className="radio-input-container">
            <span className="capitalize radio-input-content">
              {answer.content}
            </span>
            <input
              type="radio"
              className={className}
              name={name}
              value={answer.value}
              onChange={onChange}
              checked={answer.value === value}
            />
            <span className="radio-input-demonstrator"></span>
          </label>
        ))}
      <span className="input-error">{error !== undefined && error}</span>
    </div>
  );
};

RadioQues.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  answers: validMultipleInputAnswersObj,
  label: PropTypes.string.isRequired
};

export default RadioQues;
