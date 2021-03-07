// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Card from '../../../components/shared/card/Card';
import HomeLink from '../../../components/shared/links/HomeLink/HomeLink';
import Quiz from '../../../components/quiz/Quiz/Quiz';
import { QuizContainer } from '../Quiz';

// @store
import { initialState as quiz } from '../../../store/reducers/quiz/quiz';

// @utils
import { questions as results } from '../../../utiles/testHelpers';

const setup = (propOptions) => {
    const props = {
        gradeAction: jest.fn(),
        history: { replace: jest.fn() },
        nextQuestionAction: jest.fn(),
        quiz,
        ...propOptions
    };

    const enzymeWrapper = shallow(<QuizContainer {...props} />);

    return {
        props,
        enzymeWrapper
    };
};

describe('QuizContainer component', () => {
    it('should render HomeLink', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find(HomeLink)).toHaveLength(1);
    });

    it('should render Quiz', () => {
        const { enzymeWrapper } = setup();
        enzymeWrapper.setProps({
            quiz: { ...quiz, results }
        });
        expect(enzymeWrapper.find(Quiz)).toHaveLength(1);
    });

    it('should render Next Button and invoke handleOnClickNext', () => {
        const { enzymeWrapper, props } = setup();
        enzymeWrapper.setProps({
            quiz: { ...quiz, results }
        });
        const ButtonProps = enzymeWrapper.find(Card).props().actions.props;
        expect(ButtonProps.label).toEqual('Next');

        ButtonProps.onClick();
        expect(props.nextQuestionAction).toHaveBeenCalled();
    });

    it('should render Finish Button and invoke handleOnClickFinish', () => {
        const { enzymeWrapper, props } = setup();
        enzymeWrapper.setProps({
            quiz: { ...quiz, results: [results[0]] }
        });
        const ButtonProps = enzymeWrapper.find(Card).props().actions.props;
        expect(ButtonProps.label).toEqual('Finish');

        ButtonProps.onClick();
        expect(props.history.replace).toHaveBeenCalled();
    });
});
