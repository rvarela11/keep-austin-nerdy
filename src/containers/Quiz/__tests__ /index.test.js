// @vendors
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// @components
import QuizContainer from '../Quiz';
import Quiz from '../../../components/quiz/Quiz/Quiz';


// @store
import { initialState } from '../../../store/reducers/quiz/quiz';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
    quiz: initialState
});

const setup = (propOptions) => {
    const props = {
        gradeAction: jest.fn(),
        history: { replace: () => {} },
        nextQuestionAction: jest.fn(),
        ...propOptions
    };

    const enzymeWrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/']}>
                <QuizContainer {...props} />
            </MemoryRouter>
        </Provider>
    );

    return {
        props,
        enzymeWrapper
    };
};

describe('QuizContainer component', () => {
    xit('should render QuizContainer', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(Quiz)).toHaveLength(1);
    });
});
