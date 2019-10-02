/* eslint-disable import/prefer-default-export */
const initState = {
  fetchedQuestionData: [],
  inputVals: {},
  fetchingQuestionDataDone: false
};

export const surveyQuestion = (state = initState, action) => {
  switch (action.type) {
    case "INIT_FETCHED_QUESTION_DATA":
      return {
        ...state,
        fetchedQuestionData: action.payloads
      };
    case "UPDATE_INPUT_VALUE_DATA":
      return {
        ...state,
        inputVals: action.payloads
      };
    case "UPDATE_FETCHING_QUESTION_DATA_DONE":
      return {
        ...state,
        fetchingQuestionDataDone: !state.fetchingQuestionDataDone
      };
    default:
      return state;
  }
};
