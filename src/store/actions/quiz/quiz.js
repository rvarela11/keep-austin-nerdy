// @actionTypes
import * as types from '../actionTypes';
import {
    createAction,
    REQUEST,
    SUCCESS,
    FAILURE,
    TRIVIA_URL
} from '../index';

// @utiles
import { logErrorToConsole } from '../../../utiles/helpers';

// @vendors
const axios = require('axios');

export const quizActions = {
    request: () => createAction(types.GET_QUESTIONS[REQUEST]),
    success: data => createAction(types.GET_QUESTIONS[SUCCESS], { data }),
    failure: error => createAction(types.GET_QUESTIONS[FAILURE], { error })
};

export const getQuestionsAction = values => async (dispatch) => {
    const { base, questions } = TRIVIA_URL;
    const URL = base + questions;

    try {
        dispatch(quizActions.request());
        const { data } = await axios.get(URL, {
            params: { ...values }
        });
        dispatch(quizActions.success(data));
    } catch (error) {
        logErrorToConsole(error);
        const { status, statusText } = error.response;
        dispatch(quizActions.failure({ status, statusText }));
    }
};

export const nextQuestionAction = () => async (dispatch) => {
    dispatch({
        type: types.NEXT_QUESTION
    });
};

export const gradeAction = () => async (dispatch) => {
    dispatch({
        type: types.GRADE
    });
};
