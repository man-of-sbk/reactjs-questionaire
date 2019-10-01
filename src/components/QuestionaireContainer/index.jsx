import React, { Component } from "react";

import { Route } from "react-router-dom";
import { rawQuestionData } from "../../services/rawQuestionData";
import {
  MainContainer,
  MainContainerTitle,
  MainContainerSubTitle
} from "./style";

import InputsContainer from "../InputsContainer/index";
import FormResponse from "../FormResponse/index";

class QuestionaireContainer extends Component {
  constructor() {
    super();

    this.state = {
      fetchedQuestionData: [],
      fetchedDataIsLoaded: false,
      inputVals: {}
    };
  }

  setFetchedQuestionData = (newVal, callback) => {
    this.setState(
      {
        fetchedQuestionData: newVal
      },
      callback
    );
  };

  setFetchedDataIsLoaded = (newVal, callback) => {
    this.setState(
      {
        fetchedDataIsLoaded: newVal
      },
      callback
    );
  };

  setInputVals = (newVal, callback) => {
    this.setState(
      {
        inputVals: newVal
      },
      callback
    );
  };

  fetchQuestionData = () => {
    const { fetchedDataIsLoaded } = this.state;

    if (rawQuestionData && !fetchedDataIsLoaded) {
      this.setState(
        {
          fetchedQuestionData: rawQuestionData
        },
        () => {
          const newInputValsState = {};

          this.state.fetchedQuestionData.forEach(questionData => {
            newInputValsState[questionData.name] = {
              label: questionData.label,
              type: questionData.type,
              value: questionData.type === "checkbox" ? [] : "",
              error: undefined
            };
          });

          this.setInputVals(newInputValsState);
          this.setFetchedDataIsLoaded(true);
        }
      );
    }
  };

  componentDidMount = () => {
    // if (localStorage.getItem("inputVals") !== null) {
    //   localStorage.removeItem("inputVals");
    // }

    this.fetchQuestionData();
  };

  render() {
    const { inputVals, fetchedQuestionData, fetchedDataIsLoaded } = this.state;

    return (
      <MainContainer>
        <MainContainerTitle>Framgia survey form</MainContainerTitle>
        <MainContainerSubTitle>
          After submitting this form, you will be a framgia member
        </MainContainerSubTitle>
        <Route
          exact
          path="/"
          render={reactRouteProps => (
            <InputsContainer
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...reactRouteProps}
              inputVals={inputVals}
              setInputVals={this.setInputVals}
              fetchedQuestionData={fetchedQuestionData}
              fetchedDataIsLoaded={fetchedDataIsLoaded}
            />
          )}
        />
        <Route exact path="/formResponse" component={FormResponse} />
      </MainContainer>
    );
  }
}

export default QuestionaireContainer;
