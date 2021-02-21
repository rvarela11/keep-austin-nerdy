// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './Scoreboard.scss';

const Scoreboard = (props) => {
    const { results } = props;
    return (
        /*eslint-disable */
        // <div className="scoreboard">
        //     <h3 className="scoreboard__info">{(pastQuestionsLength < maxQuestions) ? pastQuestionsLength : maxQuestions} of {maxQuestions} </h3>
        //     <h3 className="scoreboard__info">Grade: {correctAnswers * 10}% </h3>
        // </div>
        /* eslint-enable */
        <div className="scoreboard">
            <h3 className="scoreboard__info">
                { `0 of ${results.length}`}
            </h3>
        </div>
    );
};

Scoreboard.propTypes = {
    results: PropTypes.array.isRequired
};

export default Scoreboard;
