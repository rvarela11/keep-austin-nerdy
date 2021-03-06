// @store
import reducer, { initialState } from '../form';

// @actionTypes
import * as types from '../../../actions/actionTypes';

// @utiles
import {
    REQUEST,
    SUCCESS,
    FAILURE
} from '../../../actions/index';

const state = initialState;

describe('Form Reducer', () => {
    it('should return the initial state for unknown actions', () => {
        expect(reducer(initialState, {})).toEqual(initialState);
    });

    it('should handle GET_FORM_DATA[REQUEST]', () => {
        expect(reducer(state, {
            type: types.GET_FORM_DATA[REQUEST]
        })).toEqual({
            ...state,
            isFetching: true
        });
    });

    it('should handle GET_FORM_DATA[SUCCESS]', () => {
        const results = [];
        expect(reducer(state, {
            type: types.GET_FORM_DATA[SUCCESS],
            results
        })).toEqual({
            ...state,
            isFetching: false,
            results
        });
    });

    it('should handle GET_FORM_DATA[FAILURE]', () => {
        const error = 'error';
        expect(reducer(state, {
            type: types.GET_FORM_DATA[FAILURE],
            error
        })).toEqual({
            ...state,
            error,
            isFetching: false
        });
    });
});
