// @actionTypes
import * as types from '../actionTypes';

// @utiles
import { generateOptions } from '../../../utiles/helpers';

// @vendors
const axios = require('axios');

const baseURL = 'https://opentdb.com';

export const getFormData = () => async (dispatch) => {
    const URL = `${baseURL}/api_category.php`;
    try {
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
        dispatch({
            type: types.GET_FORM_DATA,
            data: { formData }
        });
    } catch (error) {
        console.log('Error', error);
    }
};

export const getQuestions = values => async (dispatch) => {
    const URL = `${baseURL}/api.php`;
    try {
        const { data: { results } } = await axios.get(URL, {
            params: { ...values }
        });
        dispatch({
            type: types.GET_QUESTIONS,
            data: { results }
        });
    } catch (error) {
        console.log('Error', error);
    }
};
