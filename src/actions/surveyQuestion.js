/* eslint-disable import/prefer-default-export */
export const INIT_FETCHED_QUESTION_DATA = (fetchedData) => ({
  type: "INIT_FETCHED_QUESTION_DATA",
  payloads: fetchedData
});

export const UPDATE_INPUT_VALUE_DATA = (inputValsArr) => ({
  type: "UPDATE_INPUT_VALUE_DATA",
  payloads: inputValsArr
});

export const UPDATE_FETCHING_QUESTION_DATA_DONE = () => ({
  type: "UPDATE_FETCHING_QUESTION_DATA_DONE"
});
