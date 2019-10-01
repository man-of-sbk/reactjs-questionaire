import React, { useState } from "react";

const CheckBoxInput = ({ className, label, name, value, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckboxChange = e => {
    setIsChecked(!isChecked);
    onChange(e, isChecked);
  };

  return (
    <label className="radio-input-container checkbox-container">
      <span className="capitalize radio-input-content">{label}</span>
      <input
        className={`${className}`}
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={toggleCheckboxChange}
      />
      <span className="radio-input-demonstrator"></span>
    </label>
  );
};

export default CheckBoxInput;
