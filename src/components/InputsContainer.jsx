import React from "react";

import styled from "styled-components";

import { rawQuestionData } from "./../services/rawQuestionData";
import { inputTypes } from "./../constants/inputTypes";
// import SelectOptionQuest from "./SelectOptionQues";
// import RadioQues from "./RadioQues";
// import TextQues from "./TextQues";
// import NumberQues from "./NumberQues";

const InputContainerSection = styled.div`
  margin-top: 78px;
`;

const SubmitBtn = styled.div`
  border: none;
  padding: 13px 20px;
  font-size: 16px;
  border-radius: 8px;
  background: #02bad6;
  display: table;
  color: white;
  cursor: pointer;

  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.2);
  }
`;

const BotWarningLabel = styled.label`
  color: #bbb8c5;
  font-size: 15px;
  display: inline-block;
  margin-top: 20px;
`;

const InputsContainer = ({ ...rest }) => {
  return (
    <InputContainerSection {...rest}>
      {rawQuestionData.map((questionData, index) =>
        inputTypes[questionData.type](questionData, index)
      )}
      <SubmitBtn>Submit</SubmitBtn>
      <BotWarningLabel>
        Never submit passwords through Google Forms
      </BotWarningLabel>
    </InputContainerSection>
  );
};

export default InputsContainer;
