// @actionTypes
import * as types from '../actionTypes';
import {
    createAction,
    REQUEST,
    SUCCESS,
    FAILURE
} from '../index';

// @vendors
const axios = require('axios');

const baseURL = 'https://opentdb.com';

export const quizActions = {
    request: () => createAction(types.GET_QUESTIONS[REQUEST]),
    success: results => createAction(types.GET_QUESTIONS[SUCCESS], { results }),
    failure: error => createAction(types.GET_QUESTIONS[FAILURE], { error })
};

export const getQuestionsAction = values => async (dispatch) => {
    const URL = `${baseURL}/api.php`;
    try {
        dispatch(quizActions.request());
        const { data: { results } } = await axios.get(URL, {
            params: { ...values }
        });
        dispatch(quizActions.success(results));
    } catch (error) {
        console.log('Error', error);
        const { status, statusText } = error.response;
        dispatch(quizActions.failure({ status, statusText }));
    }
};

export const nextQuestionAction = () => async (dispatch) => {
    dispatch({
        type: types.NEXT_QUESTION
    });
};
