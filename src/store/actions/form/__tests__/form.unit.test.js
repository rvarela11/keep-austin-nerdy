/* eslint-disable camelcase */
// @vendors
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @store
import * as actions from '../form';

// @actionTypes
import * as types from '../../actionTypes';
import {
    REQUEST,
    SUCCESS,
    FAILURE,
    TRIVIA_URL
} from '../../index';

// @utiles
import { generateOptions } from '../../../../utiles/helpers';
import { trivia_categories } from '../../../../utiles/testHelpers';

// @json
const results = require('../../../../../public/formData.json');

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);

const { base, category } = TRIVIA_URL;
const URL = base + category;

describe('form actions', () => {
    afterEach(() => {
        mock.reset();
    });

    it('handles GET_FORM_DATA[SUCCESS]', async () => {
        mock
            .onGet(URL).reply(200, { trivia_categories })
            .onGet('formData.json').reply(200, results);
        results[0].category.options = generateOptions(trivia_categories);
        const expectedActions = [
            { type: types.GET_FORM_DATA[REQUEST] },
            { type: types.GET_FORM_DATA[SUCCESS], results }
        ];

        const store = mockStore();
        await store.dispatch(actions.getFormDataAction());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('handles GET_FORM_DATA[FAILURE]', async () => {
        mock.onGet(URL).reply(404);
        const error = {
            status: 404,
            statusText: undefined
        };
        const expectedActions = [
            { type: types.GET_FORM_DATA[REQUEST] },
            { type: types.GET_FORM_DATA[FAILURE], error }
        ];

        const store = mockStore();
        await store.dispatch(actions.getFormDataAction());
        expect(store.getActions()).toEqual(expectedActions);
    });
});
