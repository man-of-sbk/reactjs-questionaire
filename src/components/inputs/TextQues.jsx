import React from "react";

import { PropTypesForTypingInputs } from "./../../utils/propTypesObjs/propTypesForInputs";

const TextQues = ({ className, name, label, index }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {index && `${index}.`} {label}
      </label>
      <input
        type={"text"}
        className={`form-control ${className}`}
        name={name}
        id={name}
      />
    </div>
  );
};

PropTypesForTypingInputs(TextQues);

export default TextQues;
