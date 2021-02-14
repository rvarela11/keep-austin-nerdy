// @actionTypes
import * as types from '../../actions/actionTypes';

export const initialState = {
    form: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_FORM_QUESTIONS:
            const { questions } = action.data;
            return {
                ...state,
                form: questions
            };
        default:
            return state;
    }
}
