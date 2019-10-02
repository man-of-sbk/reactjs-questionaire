/* eslint-disable no-undef-init */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";


import { inputTypes } from "../../constants/inputTypes";
import { InputContainerSection, SubmitBtn, BotWarningLabel } from "./style";
import { UPDATE_INPUT_VALUE_DATA } from "../../actions/surveyQuestion";

const InputsContainer = ({
  fetchingQuestionDataDoneState,
  dispatchUpdateInputData,
  fetchedQuestionDataState,
  inputValsState,
  // eslint-disable-next-line react/prop-types
  history
}) => {
  const validateInputVals = (inputValue, inputType) => {
    let error = undefined;

    if (inputType === "number" && parseInt(inputValue) < 0) {
      error = "Invalid input value";
    } else if (inputValue.toString().trim() === "") {
      error = "Above input is required";
    }

    return error;
  };

  const onInputChange = (e) => {
    const { name, type, checked } = e.target;
    const { value } = e.target;

    const inputValsStateClone = { ...inputValsState };
    const inputValsStateAtNameClone = { ...inputValsState[name] };

    inputValsStateAtNameClone.error = validateInputVals(value, type);

    if (type === "checkbox") {
      if (checked) {
        inputValsStateAtNameClone.value.push(value);
      } else {
        inputValsStateAtNameClone.value = inputValsStateAtNameClone.value.filter((checkboxValue) => checkboxValue !== value);
      }
    } else {
      inputValsStateAtNameClone.value = value;
    }

    inputValsStateClone[name] = inputValsStateAtNameClone;

    dispatchUpdateInputData(inputValsStateClone);
  };

  const onSubmit = () => {
    const inputValsStateClone = { ...inputValsState };

    let hasErr = false;
    // const inputValsStateAtNameClone = {};

    Object.keys(inputValsStateClone).forEach((inputName) => {
      const currentInputVals = inputValsState[inputName];
      const inputValidationRes = validateInputVals(
        currentInputVals.value,
        currentInputVals.type
      );
      inputValsStateClone[inputName] = { ...currentInputVals };

      inputValsStateClone[inputName].error = inputValidationRes;

      if (inputValidationRes !== undefined && !hasErr) {
        hasErr = true;
      }
    });

    dispatchUpdateInputData(inputValsStateClone);

    if (hasErr) return;

    localStorage.setItem("inputVals", JSON.stringify(inputValsStateClone));
    // eslint-disable-next-line react/prop-types
    history.push("/formResponse");
  };

  if (!fetchingQuestionDataDoneState) {
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
      {fetchedQuestionDataState.map((questionData, index) => inputTypes(
        questionData,
        index,
        onInputChange,
      )[questionData.type]())}
      <SubmitBtn onClick={onSubmit}>Submit</SubmitBtn>
      <BotWarningLabel>
        Never submit passwords through Google Forms
      </BotWarningLabel>
    </InputContainerSection>
  );
};

InputsContainer.propTypes = {
  dispatchUpdateInputData: PropTypes.func,
  fetchedQuestionDataState: PropTypes.array,
  inputValsState: PropTypes.object,
  fetchingQuestionDataDoneState: PropTypes.bool
};

const mapStateToProps = (state) => ({
  inputValsState: state.surveyQuestion.inputVals,
  fetchedQuestionDataState: state.surveyQuestion.fetchedQuestionData,
  fetchingQuestionDataDoneState: state.surveyQuestion.fetchingQuestionDataDone

});

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateInputData: (newInputValsObj) => {
    dispatch(UPDATE_INPUT_VALUE_DATA(newInputValsObj));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InputsContainer);
