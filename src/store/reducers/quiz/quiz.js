// @actionTypes
import * as types from '../../actions/actionTypes';

// @utiles
import {
    REQUEST,
    SUCCESS,
    FAILURE
} from '../../actions/index';

export const initialState = {
    current: 0,
    error: {},
    grade: 0,
    isFetching: false,
    results: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_QUESTIONS[REQUEST]:
            return {
                ...state,
                isFetching: true
            };
        case types.GET_QUESTIONS[SUCCESS]: {
            const { results } = action;
            return {
                ...initialState,
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
        default:
            return state;
    }
}
