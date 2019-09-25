import React from "react";

import { PropTypesForChoosingInputs } from "./../../utils/propTypesObjs/propTypesForInputs";

const SelectOptionQuest = ({ className, name, answers, label, index }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {index && `${index}.`} {label}
      </label>
      <select className={`form-control ${className}`} name={name} id={name}>
        {answers &&
          Array.isArray(answers) &&
          answers.map((answer, index) => (
            <option className="capitalize" key={index} value={answer.value}>
              {answer.content}
            </option>
          ))}
      </select>
    </div>
  );
};

PropTypesForChoosingInputs(SelectOptionQuest);

export default SelectOptionQuest;
