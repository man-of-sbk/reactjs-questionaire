import React from "react";
import { PropTypesForChoosingInputs } from "./../../utils/propTypesObjs/propTypesForInputs";

const RadioQues = ({ className, name, answers, label, index }) => {
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
            />
            <span className="radio-input-demonstrator"></span>
          </label>
        ))}
    </div>
  );
};

PropTypesForChoosingInputs(RadioQues);

export default RadioQues;
