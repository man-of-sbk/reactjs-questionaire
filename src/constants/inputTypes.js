import React from "react";

import RadioQues from "./../components/inputs/RadioQues";
import TextQues from "./../components/inputs/TextQues";
import NumberQues from "../components/inputs/NumberQues";
import SelectOptionQuest from "./../components/inputs/SelectOptionQues";

export const inputTypes = {
  text: (inputData, index) => (
    <TextQues {...inputData} index={index + 1} key={index} />
  ),
  number: (inputData, index) => (
    <NumberQues {...inputData} index={index + 1} key={index} />
  ),
  radio: (inputData, index) => (
    <RadioQues {...inputData} index={index + 1} key={index} />
  ),
  select: (inputData, index) => (
    <SelectOptionQuest {...inputData} index={index + 1} key={index} />
  )
};
