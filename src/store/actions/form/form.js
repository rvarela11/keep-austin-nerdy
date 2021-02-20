// @actionTypes
import * as types from '../actionTypes';
import {
    createAction,
    REQUEST,
    SUCCESS,
    FAILURE
} from '../index';

// @utiles
import { generateOptions } from '../../../utiles/helpers';

// @vendors
const axios = require('axios');

const baseURL = 'https://opentdb.com';

export const formActions = {
    request: () => createAction(types.GET_FORM_DATA[REQUEST]),
    success: results => createAction(types.GET_FORM_DATA[SUCCESS], { results }),
    failure: error => createAction(types.GET_FORM_DATA[FAILURE], { error })
};

export const getFormDataAction = () => async (dispatch) => {
    const URL = `${baseURL}/api_category.php`;
    try {
        dispatch(formActions.request());
        const { data } = await axios.get(URL);
        // const ax = axios.create({
        //     baseURL: 'http://robertvarela.com/keep-austin-nerdy'
        // });
        const res = await axios.get('formData.json');
        const formData = res.data;
        formData[0].category = {
            ...formData[0].category,
            options: generateOptions(data.trivia_categories)
        };
        dispatch(formActions.success(formData));
    } catch (error) {
        console.log('Error', error);
        const { status, statusText } = error.response;
        dispatch(formActions.failure({ status, statusText }));
    }
};