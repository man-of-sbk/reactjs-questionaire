import React from "react";

import styled from "styled-components";

import InputsContainer from "./InputsContainer";

const MainContainer = styled.div`
  position: relative;
  max-width: 850px;
  background: white;
  margin: 50px auto 60px auto;
  padding: 50px 45px 30px 45px;

  -webkit-box-shadow: 0px 0px 18px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -10px rgba(0, 0, 0, 0.75);

  &:before {
    content: " ";
    width: 100%;
    height: 8px;
    background: #b387f7;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const MainContainerTitle = styled.h2`
  color: #424242;
  font-size: 35px;
  text-transform: capitalize;
  position: relative;
  margin-bottom: 30px;
`;

const MainContainerSubTitle = styled.h3`
  font-size: 15px;
  font-weight: normal;
`;

const QuestionaireContainer = () => {
  return (
    <MainContainer>
      <MainContainerTitle>Framgia survey form</MainContainerTitle>
      <MainContainerSubTitle>
        After submitting this form, you will be a framgia member
      </MainContainerSubTitle>
      <InputsContainer />
    </MainContainer>
  );
};

export default QuestionaireContainer;
