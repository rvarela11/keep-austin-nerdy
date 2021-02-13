import { getQuestionsData } from './index';

const axios = require('axios');

export const getQuestionsAPI = () => (dispatch) => {
    const ax = axios.create({
        baseURL: 'http://robertvarela.com/keep-austin-nerdy'
    });
    ax.get('questions.json')
        .then(response => dispatch(getQuestionsData(response.data)))
        .catch(error => console.log('Error', error));
};
