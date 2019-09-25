import React from "react";

import { PropTypesForTypingInputs } from "./../../utils/propTypesObjs/propTypesForInputs";

const NumberQues = ({ className, name, label, index }) => {
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
      />
    </div>
  );
};

PropTypesForTypingInputs(NumberQues);

export default NumberQues;
