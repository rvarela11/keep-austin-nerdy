// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import { NextButton } from '../NextButton';

describe('NextButton Container', () => {
    it('renders NextButton without crashing', () => {
        shallow(
            <NextButton
                classes={{}}
                getQuestionsAPI={() => {}}
                isQuestionAnswered={false}
                maxQuestions={10}
                pastQuestionsLength={0}
                updatePastQuestions={() => {}}
            />
        );
    });
});
