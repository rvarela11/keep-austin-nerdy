/* eslint-disable camelcase */
// @store
import reducer, { initialState } from '../quiz';

// @actionTypes
import * as types from '../../../actions/actionTypes';

// @utiles
import {
    REQUEST,
    SUCCESS,
    FAILURE
} from '../../../actions/index';

const state = initialState;

describe('Quiz Reducer', () => {
    it('should return the default state', () => {
        expect(reducer(state, {})).toEqual(state);
    });

    it('should handle GET_QUESTIONS[REQUEST]', () => {
        expect(reducer(state, {
            type: types.GET_QUESTIONS[REQUEST]
        })).toEqual({
            ...state,
            isFetching: true
        });
    });

    it('should handle GET_QUESTIONS[SUCCESS]', () => {
        const data = { response_code: 0, results: [] };
        const { response_code, results } = data;
        expect(reducer(state, {
            type: types.GET_QUESTIONS[SUCCESS],
            data
        })).toEqual({
            ...state,
            isFetching: false,
            response_code,
            results
        });
    });

    it('should handle GET_QUESTIONS[FAILURE]', () => {
        const error = 'error';
        expect(reducer(state, {
            type: types.GET_QUESTIONS[FAILURE],
            error
        })).toEqual({
            ...state,
            error,
            isFetching: false
        });
    });

    it('should handle NEXT_QUESTION', () => {
        expect(reducer(state, {
            type: types.NEXT_QUESTION
        })).toEqual({
            ...state,
            current: state.current + 1
        });
    });

    it('should handle GRADE', () => {
        expect(reducer(state, {
            type: types.GRADE
        })).toEqual({
            ...state,
            grade: state.grade + 10
        });
    });
});
