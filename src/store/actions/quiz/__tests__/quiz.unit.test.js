/* eslint-disable camelcase */
// @vendors
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @store
import * as actions from '../quiz';

// @actionTypes
import * as types from '../../actionTypes';
import {
    REQUEST,
    SUCCESS,
    FAILURE,
    TRIVIA_URL
} from '../../index';

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);

const { base, questions } = TRIVIA_URL;
const URL = base + questions;

describe('quiz actions', () => {
    afterEach(() => {
        mock.reset();
    });

    it('handles GET_QUESTIONS[SUCCESS]', async () => {
        const data = {
            response_code: 0,
            results: []
        };

        mock.onGet(URL).reply(200, data);
        const expectedActions = [
            { type: types.GET_QUESTIONS[REQUEST] },
            { type: types.GET_QUESTIONS[SUCCESS], data }
        ];

        const store = mockStore();
        await store.dispatch(actions.getQuestionsAction());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('handles GET_QUESTIONS[FAILURE]', async () => {
        mock.onGet(URL).reply(404);
        const error = {
            status: 404,
            statusText: undefined
        };
        const expectedActions = [
            { type: types.GET_QUESTIONS[REQUEST] },
            { type: types.GET_QUESTIONS[FAILURE], error }
        ];

        const store = mockStore();
        await store.dispatch(actions.getQuestionsAction());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('handles NEXT_QUESTION', async () => {
        const expectedActions = [{ type: types.NEXT_QUESTION }];

        const store = mockStore();
        await store.dispatch(actions.nextQuestionAction());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('handles GRADE', async () => {
        const expectedActions = [{ type: types.GRADE }];

        const store = mockStore();
        await store.dispatch(actions.gradeAction());
        expect(store.getActions()).toEqual(expectedActions);
    });
});
