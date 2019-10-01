import React from "react";

import { inputTypes } from "../../constants/inputTypes";
import { InputContainerSection, SubmitBtn, BotWarningLabel } from "./style";

const InputsContainer = ({
  inputVals,
  setInputVals,
  fetchedQuestionData,
  fetchedDataIsLoaded,
  history
}) => {
  const validateInputVals = (inputValue, inputType) => {
    let value = inputValue;
    const type = inputType;
    let error = "";

    if (type === "number" && parseInt(value) < 0) {
      value = 0;
      error = "Invalid input value";
    } else if (value.toString().trim() === "") {
      error = "Above input is required";
    } else {
      error = undefined;
    }

    // *** res is an object satisfying the format of "inputVals" state
    return {
      value,
      type,
      error
    };
  };

  const onInputChange = e => {
    const { name, type } = e.target;
    const { value } = e.target;
    let currentCheckboxInputVal = [];

    const newInputVals = { ...inputVals };
    let newInputValOfThisInput = { ...newInputVals[name] };

    if (type === "checkbox") {
      currentCheckboxInputVal = newInputValOfThisInput.value;

      if (currentCheckboxInputVal.indexOf(value) > -1) {
        newInputValOfThisInput.value = currentCheckboxInputVal.filter(
          checkBoxVal => checkBoxVal !== value
        );
      } else {
        newInputValOfThisInput.value.push(value);
      }
    }

    newInputValOfThisInput = {
      ...newInputValOfThisInput,
      ...validateInputVals(
        type === "checkbox" ? newInputValOfThisInput.value : value,
        type
      )
    };

    newInputVals[name] = newInputValOfThisInput;

    setInputVals(newInputVals);
  };

  const onSubmit = () => {
    const newInputVals = { ...inputVals };
    let newInputValsAtName = {};
    let hasError = false;

    Object.keys(newInputVals).forEach(inputName => {
      newInputValsAtName = newInputVals[inputName];

      newInputValsAtName = {
        ...newInputValsAtName,
        ...validateInputVals(newInputValsAtName.value, newInputValsAtName.type)
      };

      if (!hasError && newInputValsAtName.error !== undefined) {
        hasError = true;
      }

      newInputVals[inputName] = newInputValsAtName;
    });

    if (hasError) {
      // *** add new errors propery for invalid input value
      setInputVals(newInputVals);
      return;
    }

    localStorage.setItem("inputVals", JSON.stringify(newInputVals));

    history.push("/formResponse");
  };

  if (!fetchedDataIsLoaded) {
    return (
      <InputContainerSection textAlign="center">
        <img
          src="https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
          alt="loading-icon"
          width="100px"
          height="100px"
        />
      </InputContainerSection>
    );
  }

  return (
    <InputContainerSection>
      {fetchedQuestionData.map((questionData, index) =>
        inputTypes(
          questionData,
          index,
          onInputChange,
          inputVals[questionData.name].value,
          inputVals[questionData.name].error
        )[questionData.type]()
      )}
      <SubmitBtn onClick={onSubmit}>Submit</SubmitBtn>
      <BotWarningLabel>
        Never submit passwords through Google Forms
      </BotWarningLabel>
    </InputContainerSection>
  );
};

export default InputsContainer;
