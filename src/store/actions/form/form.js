// @actionTypes
import * as types from '../actionTypes';

// @vendors
const axios = require('axios');

export const getFormQuestions = () => (dispatch) => {
    const ax = axios.create({
        baseURL: 'http://robertvarela.com/keep-austin-nerdy'
    });
    ax.get('questions.json')
        .then(response => dispatch({
            type: types.GET_FORM_QUESTIONS,
            data: {
                data: response.data
            }
        }))
        .catch(error => console.log('Error', error));
};
