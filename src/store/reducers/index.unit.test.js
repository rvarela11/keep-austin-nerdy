// @store
import rootReducer from '.';
import { initialState as quiz } from './quiz/quiz';
import { initialState as form } from './form/form';

describe('Form Reducer', () => {
    it('should return the default state', () => {
        const initialState = {
            form,
            quiz
        };
        expect(rootReducer(initialState, initialState)).toEqual(initialState);
    });
});
