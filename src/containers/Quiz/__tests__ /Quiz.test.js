/* eslint-disable camelcase */
// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @material-ui
import Typography from '@material-ui/core/Typography';

// @components
import Card from '../../../components/shared/card/Card';
import HomeLink from '../../../components/shared/links/HomeLink/HomeLink';
import Quiz from '../../../components/quiz/Quiz/Quiz';
import { QuizContainer, mapDispatchToProps, mapStateToProps } from '../Quiz';

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
        const { enzymeWrapper } = setup({
            quiz: { ...quiz, response_code: 1 }
        });
        expect(enzymeWrapper.find(Typography)).toHaveLength(1);
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

    it('should invoke handleAnswer and handleGrade', () => {
        const { enzymeWrapper, props } = setup();
        enzymeWrapper.setProps({
            quiz: { ...quiz, results }
        });
        const QuizProps = enzymeWrapper.find(Quiz).props();

        // Correct answer
        const { correct_answer } = results[0];
        QuizProps.handleAnswer(correct_answer, correct_answer);
        const { answer, answered, isAnswerCorrect } = enzymeWrapper.state();
        expect(answer).toEqual(correct_answer);
        expect(answered).toEqual(true);
        expect(isAnswerCorrect).toEqual(true);
        expect(props.gradeAction).toHaveBeenCalled();

        // Wrong answer
        const wrong_answer = 'wrong';
        QuizProps.handleAnswer(wrong_answer, correct_answer);
        expect(enzymeWrapper.state().answer).toEqual(wrong_answer);
        expect(enzymeWrapper.state().answered).toEqual(true);
    });

    it('should invoke resetState', () => {
        const { enzymeWrapper } = setup();
        const spy = jest.spyOn(enzymeWrapper.instance(), 'resetState');
        enzymeWrapper.setProps({
            quiz: { ...quiz, current: 1 }
        });
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should render mapDispatchToProps', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        const expected = JSON.stringify(() => {});
        expect(props.gradeAction()).toEqual(expected);
        expect(props.nextQuestionAction()).toEqual(expected);
    });

    it('should render mapStateToProps', () => {
        const state = { quiz };
        expect(mapStateToProps(state)).toEqual(state);
    });
});
