/* eslint-disable camelcase */
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
import { generateOptions, logErrorToConsole } from '../../../utiles/helpers';

// @vendors
const axios = require('axios');

export const formActions = {
    request: () => createAction(types.GET_FORM_DATA[REQUEST]),
    success: results => createAction(types.GET_FORM_DATA[SUCCESS], { results }),
    failure: error => createAction(types.GET_FORM_DATA[FAILURE], { error })
};

export const getFormDataAction = () => async (dispatch) => {
    const { base, category } = TRIVIA_URL;
    const URL = base + category;

    try {
        dispatch(formActions.request());
        const { data } = await axios.get(URL);
        const ax = axios.create({
            baseURL: 'http://robertvarela.com/keep-austin-nerdy'
        });
        const res = await ax.get('formData.json');
        const formData = res.data;
        formData[0].category = {
            ...formData[0].category,
            options: generateOptions(data.trivia_categories)
        };
        dispatch(formActions.success(formData));
    } catch (error) {
        logErrorToConsole(error);
        const { status, statusText } = error.response;
        dispatch(formActions.failure({ status, statusText }));
    }
};
