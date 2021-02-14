// @actionTypes
import * as types from '../../actions/actionTypes';

export const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_FORM_QUESTIONS:
            const { data } = action.data;
            return {
                ...state,
                ...data
            };
        default:
            return state;
    }
}
