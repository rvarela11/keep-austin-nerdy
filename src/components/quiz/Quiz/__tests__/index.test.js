// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Quiz from '../Quiz';
import Answer from '../../Answer/Answer';

const setup = (propOptions) => {
    const props = {
        answer: 'D',
        answered: false,
        current: 0,
        handleAnswer: jest.fn(),
        isAnswerCorrect: false,
        results: [{}],
        ...propOptions
    };

    const enzymeWrapper = shallow(<Quiz {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('Quiz component', () => {
    it('should render Quiz', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('.quiz')).toHaveLength(1);
    });

    it('should display Answer', () => {
        const { enzymeWrapper } = setup({
            answered: true
        });
        expect(enzymeWrapper.find(Answer)).toHaveLength(1);
    });
});
