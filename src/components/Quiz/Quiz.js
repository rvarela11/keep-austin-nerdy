// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Scoreboard from '../Scoreboard/Scoreboard';
import QuizCard from '../QuizCard/QuizCard';
import NextButton from '../NextButton/NextButton';
import Results from '../Results/Results';

// @styles
import './Quiz.scss';

export const Quiz = (props) => {
    const {
        correctAnswers,
        isQuestionAnswered,
        maxQuestions,
        pastQuestionsLength,
        questionInfo
    } = props;
    return (
        <div className="quiz">
            <Scoreboard
                correctAnswers={correctAnswers}
                maxQuestions={maxQuestions}
                pastQuestionsLength={pastQuestionsLength}
            />
            {(pastQuestionsLength <= maxQuestions)
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
            }
        </div>
    );
};

const mapStateToProps = state => ({
    correctAnswers: state.correctAnswers,
    isQuestionAnswered: state.isQuestionAnswered,
    maxQuestions: state.maxQuestions,
    pastQuestionsLength: state.pastQuestions.length,
    questionInfo: state.apiOneQuestion
});

Quiz.propTypes = {
    correctAnswers: PropTypes.number.isRequired,
    isQuestionAnswered: PropTypes.bool.isRequired,
    maxQuestions: PropTypes.number.isRequired,
    pastQuestionsLength: PropTypes.number.isRequired,
    questionInfo: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Quiz);
