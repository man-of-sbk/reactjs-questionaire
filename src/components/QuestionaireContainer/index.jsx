/* eslint-disable react/require-default-props */
import React, { Component } from "react";

import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { rawQuestionData } from "../../services/rawQuestionData";
import {
  MainContainer,
  MainContainerTitle,
  MainContainerSubTitle
} from "./style";

import {
  INIT_FETCHED_QUESTION_DATA,
  UPDATE_INPUT_VALUE_DATA,
  UPDATE_FETCHING_QUESTION_DATA_DONE
} from "../../actions/surveyQuestion";

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

  fetchQuestionData = () => {
    if (!rawQuestionData) return;

    const {
      dispatchUpdateFetchedQuestionData,
      dispatchUpdateInputValsData,
      dispatchUpdateFetchingQuestionDataDone
    } = this.props;
    const newInputValsData = {};

    dispatchUpdateFetchedQuestionData(rawQuestionData);

    rawQuestionData.forEach((questionData) => {
      newInputValsData[questionData.name] = {
        label: questionData.label,
        type: questionData.type,
        value: questionData.type === "checkbox" ? [] : "",
        error: ""
      };
    });

    dispatchUpdateInputValsData(newInputValsData);
    dispatchUpdateFetchingQuestionDataDone();
  }

  componentDidMount = () => {
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
          render={(reactRouteProps) => (
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

QuestionaireContainer.propTypes = {
  dispatchUpdateFetchedQuestionData: PropTypes.func,
  dispatchUpdateInputValsData: PropTypes.func,
  dispatchUpdateFetchingQuestionDataDone: PropTypes.func
};

const mapStateToProps = (state) => ({
  fetchedQuestionDataState: state.surveyQuestion.fetchedQuestionData
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateFetchedQuestionData: (fetchedQuestionData) => {
    dispatch(INIT_FETCHED_QUESTION_DATA(fetchedQuestionData));
  },
  dispatchUpdateInputValsData: (inputValsArr) => {
    dispatch(UPDATE_INPUT_VALUE_DATA(inputValsArr));
  },
  dispatchUpdateFetchingQuestionDataDone: () => {
    dispatch(UPDATE_FETCHING_QUESTION_DATA_DONE());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionaireContainer);
