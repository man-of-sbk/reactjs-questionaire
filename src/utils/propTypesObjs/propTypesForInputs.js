import { PropTypes } from "prop-types";
import { validMultipleInputAnswersObj } from "./../CustomPropTypes/validMultipleInputAnswersObj";

export const PropTypesForChoosingInputs = components => {
  components.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    answers: validMultipleInputAnswersObj,
    label: PropTypes.string.isRequired
  };
};

export const PropTypesForTypingInputs = components => {
  components.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  };
};
