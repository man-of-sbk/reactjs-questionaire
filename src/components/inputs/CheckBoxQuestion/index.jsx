/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React from "react";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { validMultipleInputAnswersObj } from "../../../utils/CustomPropTypes/validMultipleInputAnswersObj";

const CheckBoxQues = ({
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
      <label className="form-label" htmlFor={name}>
        {index && `${index}.`}
        {label}
      </label>
      {answers
        && Array.isArray(answers)
        && answers.map((answer, answerIndex) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label key={answerIndex} className="radio-input-container checkbox-container">
            <span className="capitalize radio-input-content">{answer.content}</span>
            <input
              className={`${className}`}
              type="checkbox"
              name={name}
              value={answer.value}
              onChange={onChange}
            />
            <span className="radio-input-demonstrator" />
          </label>
        ))}
      <span className="input-error">{error !== undefined && error}</span>
    </div>
  );
};

CheckBoxQues.propTypes = {
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

export default connect(mapStateToProps)(CheckBoxQues);
