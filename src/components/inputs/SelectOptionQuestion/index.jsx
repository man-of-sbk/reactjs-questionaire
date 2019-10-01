import React from "react";

import { PropTypes } from "prop-types";
import { validMultipleInputAnswersObj } from "../../../utils/CustomPropTypes/validMultipleInputAnswersObj";

const SelectOptionQuest = ({
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
      <label htmlFor={name} className="form-label">
        {index && `${index}.`} {label}
      </label>
      <select
        className={`form-control ${className}`}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      >
        <option
          className="capitalize"
          value="" /*selected={value.trim() === ""}*/
        >
          Choose an answer
        </option>
        {answers &&
          Array.isArray(answers) &&
          answers.map((answer, index) => (
            <option
              className="capitalize"
              key={index}
              value={answer.value}
              // selected={answer.value === value}
            >
              {answer.content}
            </option>
          ))}
      </select>
      <span className="input-error">{error !== undefined && error}</span>
    </div>
  );
};

SelectOptionQuest.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  answers: validMultipleInputAnswersObj,
  label: PropTypes.string.isRequired
};

export default SelectOptionQuest;
