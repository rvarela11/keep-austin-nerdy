// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Scoreboard from '../Scoreboard/Scoreboard';
import QuizCard from '../QuizCard/QuizCard';
import NextButton from '../NextButton/NextButton';

// @styles
import './Quiz.scss';

const Quiz = (props) => {
    const {
        correctAnswers,
        questionInfo,
        maxQuestions,
        pastQuestionsLength
    } = props;
    return (
        <div className="quiz">
            <Scoreboard
                correctAnswers={correctAnswers}
                maxQuestions={maxQuestions}
                pastQuestionsLength={pastQuestionsLength}
            />
            {
                questionInfo.map(item => (
                    <QuizCard
                        key={item.id}
                        item={item}
                        isQuestionAnswered={false}
                    />
                ))
            }
            {(pastQuestionsLength > maxQuestions) ? null : <NextButton />}
        </div>
    );
};

const mapStateToProps = state => ({
    correctAnswers: state.correctAnswers,
    questionInfo: state.apiOneQuestion,
    maxQuestions: state.maxQuestions,
    pastQuestionsLength: state.pastQuestions.length
});

Quiz.propTypes = {
    correctAnswers: PropTypes.number.isRequired,
    questionInfo: PropTypes.array.isRequired,
    maxQuestions: PropTypes.number.isRequired,
    pastQuestionsLength: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Quiz);
