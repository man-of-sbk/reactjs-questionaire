/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import RadioQues from "../components/inputs/RadioQuestion/index";
import TextQues from "../components/inputs/TextQuestion/index";
import NumberQues from "../components/inputs/NumberQuestion/index";
import SelectOptionQuest from "../components/inputs/SelectOptionQuestion/index";
import CheckBoxQues from "../components/inputs/CheckBoxQuestion/index";

export const inputTypes = (generalInputData, index, onChange) => {
  const inputRequiredProps = {
    key: index,
    index: index + 1,
    onChange,
    ...generalInputData
  };

  return {
    // *** without returning components from a function, we're
    // ***** actually calling their constructor or just simply
    // ***** calling them, rendering them just as when we pass
    // ***** an event to a DOM or a component with a pair of brackets following behind which
    // ***** means, we're calling the event, not passing it's reference to the DOM/component.
    text: () => (
      <TextQues
        {...inputRequiredProps}
      />
    ),
    number: () => (
      <NumberQues
        {...inputRequiredProps}
      />
    ),
    radio: () => (
      <RadioQues
        {...inputRequiredProps}
      />
    ),
    select: () => (
      <SelectOptionQuest
        {...inputRequiredProps}
      />
    ),
    checkbox: () => (
      <CheckBoxQues
        {...inputRequiredProps}
      />
    )
  };
};
