/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
import React from "react";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { validMultipleInputAnswersObj } from "../../../utils/CustomPropTypes/validMultipleInputAnswersObj";

const SelectOptionQuest = ({
  className,
  name,
  answers,
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
      <select
        className={`form-control ${className}`}
        name={name}
        id={name}
        onChange={onChange}
      >
        <option
          className="capitalize"
          value=""
        >
          Choose an answer
        </option>
        {answers
          && Array.isArray(answers)
          && answers.map((answer, answerIndex) => (
            <option
              className="capitalize"
              key={answerIndex}
              value={answer.value}
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
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  answers: validMultipleInputAnswersObj,
  // eslint-disable-next-line react/forbid-prop-types
  inputValsState: PropTypes.object
};

const mapStateToProps = (state) => ({
  inputValsState: state.surveyQuestion.inputVals
});

export default connect(mapStateToProps)(SelectOptionQuest);
