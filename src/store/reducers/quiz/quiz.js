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
                ...state,
                isFetching: false,
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
        default:
            return state;
    }
}
