// @actionTypes
import * as types from '../actionTypes';

// @vendors
const axios = require('axios');

export const getFormData = () => async (dispatch) => {
    const URL = 'https://opentdb.com/api_category.php';
    const { data } = await axios.get(URL);
    // const ax = axios.create({
    //     baseURL: 'http://robertvarela.com/keep-austin-nerdy'
    // });
    axios.get('formData.json')
        .then((response) => {
            const formData = response.data;
            formData[0].category = {
                ...formData[0].category,
                ...data
            };
            dispatch({
                type: types.GET_FORM_DATA,
                data: { formData }
            });
        })
        .catch(error => console.log('Error', error));
};
