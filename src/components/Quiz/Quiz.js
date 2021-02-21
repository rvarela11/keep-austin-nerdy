// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import Scoreboard from '../Scoreboard/Scoreboard';
// import QuizCard from '../QuizCard/QuizCard';
// import NextButton from '../NextButton/NextButton';
// import Results from '../Results/Results';

// @styles
import './Quiz.scss';

export const Quiz = (props) => {
    const {
        results
    } = props;
    return (
        <div className="quiz">
            <Scoreboard results={results} />
            {/* <Scoreboard
                correctAnswers={correctAnswers}
                maxQuestions={maxQuestions}
                pastQuestionsLength={pastQuestionsLength}
            /> */}
            {/* {(pastQuestionsLength <= maxQuestions)
                ? questionInfo.map(item => (
                    <QuizCard
                        key={item.id}
                        item={item}
                        isQuestionAnswered={isQuestionAnswered}
                    />
                ))
                : <Results correctAnswers={correctAnswers} />
            }
            {(pastQuestionsLength <= maxQuestions)
                ? (
                    <NextButton
                        isQuestionAnswered={isQuestionAnswered}
                        maxQuestions={maxQuestions}
                        pastQuestionsLength={pastQuestionsLength}
                    />
                )
                : null
            } */}
        </div>
    );
};

Quiz.propTypes = {
    results: PropTypes.array.isRequired
};

export default Quiz;
