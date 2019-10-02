/* eslint-disable import/prefer-default-export */
import { combineReducers } from "redux";

import { surveyQuestion } from "./surveyQuestion";

export const rootReducer = combineReducers({ surveyQuestion });
