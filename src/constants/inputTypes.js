import React from "react";

import RadioQues from "./../components/inputs/RadioQuestion/index";
import TextQues from "./../components/inputs/TextQuestion/index";
import NumberQues from "../components/inputs/NumberQuestion/index";
import SelectOptionQuest from "./../components/inputs/SelectOptionQuestion/index";
import CheckBoxQues from "./../components/inputs/CheckBoxQuestion/index";

export const inputTypes = (inputData, index, onInputChange, value, error) => ({
  // *** without returning components from a function, we're actually calling their constructor or just simply
  // ***** calling them, rendering them just as when we pass an event to a DOM or a component with
  // ***** a pair of brackets following behind which means, we're calling the event, not passing it's reference to
  // ***** the DOM/component.
  text: () => (
    <TextQues
      key={index}
      {...inputData}
      index={index + 1}
      onChange={onInputChange}
      value={value}
      error={error}
    />
  ),
  number: () => (
    <NumberQues
      key={index}
      {...inputData}
      index={index + 1}
      onChange={onInputChange}
      value={value}
      error={error}
    />
  ),
  radio: () => (
    <RadioQues
      key={index}
      {...inputData}
      index={index + 1}
      onChange={onInputChange}
      value={value}
      error={error}
    />
  ),
  select: () => (
    <SelectOptionQuest
      key={index}
      {...inputData}
      index={index + 1}
      onChange={onInputChange}
      value={value}
      error={error}
    />
  ),
  checkbox: () => (
    <CheckBoxQues
      key={index}
      {...inputData}
      index={index + 1}
      onChange={onInputChange}
      value={value}
      error={error}
    />
  )
});
