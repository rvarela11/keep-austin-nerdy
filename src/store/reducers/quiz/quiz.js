/* eslint-disable camelcase */
// @actionTypes
import * as types from '../../actions/actionTypes';

// @utiles
import {
    REQUEST,
    SUCCESS,
    FAILURE
} from '../../actions/index';

export const initialState = {
    current: 9,
    error: {},
    grade: 0,
    isFetching: false,
    response_code: 0,
    results: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_QUESTIONS[REQUEST]:
            return {
                ...initialState,
                isFetching: true
            };
        case types.GET_QUESTIONS[SUCCESS]: {
            const { response_code, results } = action.data;
            return {
                ...state,
                isFetching: false,
                response_code,
                results
            };
        }
        case types.GET_QUESTIONS[FAILURE]: {
            const { error } = action;
            return {
                ...state,
                error,
                isFetching: false
            };
        }
        case types.NEXT_QUESTION:
            return {
                ...state,
                current: state.current + 1
            };
        case types.GRADE:
            return {
                ...state,
                grade: state.grade + 10
            };
        default:
            return state;
    }
}
