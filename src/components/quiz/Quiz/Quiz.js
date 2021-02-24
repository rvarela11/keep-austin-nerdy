// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

// @styles
import './Quiz.scss';

const Quiz = (props) => {
    const {
        answer, answered, current, handleAnswer, isAnswerCorrect, results
    } = props;

    return (
        <div className="quiz">
            <Question
                answered={answered}
                handleAnswer={handleAnswer}
                item={results[current]}
            />
            { answered
                && <Answer answer={answer} isAnswerCorrect={isAnswerCorrect} />
            }
        </div>
    );
};

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answered: PropTypes.bool.isRequired,
    current: PropTypes.number.isRequired,
    handleAnswer: PropTypes.func.isRequired,
    isAnswerCorrect: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired
};

export default Quiz;
