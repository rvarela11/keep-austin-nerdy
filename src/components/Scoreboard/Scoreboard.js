// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './Scoreboard.scss';

const Scoreboard = (props) => {
    const { correctAnswers, maxQuestions, pastQuestionsLength } = props;
    return (
        /*eslint-disable */
        <div className="scoreboard">
            <h3 className="scoreboard__info">{(pastQuestionsLength < maxQuestions) ? pastQuestionsLength : maxQuestions} of {maxQuestions} </h3>
            <h3 className="scoreboard__info">Grade: {correctAnswers * 10}% </h3>
        </div>
        /* eslint-enable */
    );
};

Scoreboard.propTypes = {
    correctAnswers: PropTypes.number.isRequired,
    maxQuestions: PropTypes.number.isRequired,
    pastQuestionsLength: PropTypes.number.isRequired
};

export default Scoreboard;
