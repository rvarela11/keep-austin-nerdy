// @actionTypes
import * as types from '../actionTypes';

// @vendors
const axios = require('axios');

export const getFormQuestions = () => (dispatch) => {
    // const ax = axios.create({
    //     baseURL: 'http://robertvarela.com/keep-austin-nerdy'
    // });
    axios.get('formQuestions.json')
        .then(response => dispatch({
            type: types.GET_FORM_QUESTIONS,
            data: {
                questions: response.data
            }
        }))
        .catch(error => console.log('Error', error));
};
