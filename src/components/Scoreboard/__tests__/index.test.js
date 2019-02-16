// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Scoreboard from '../Scoreboard';

describe('Scoreboard Container', () => {
    it('renders Scoreboard without crashing', () => {
        shallow(
            <Scoreboard
                correctAnswers={1}
                maxQuestions={10}
                pastQuestionsLength={0}
            />
        );
    });
});
