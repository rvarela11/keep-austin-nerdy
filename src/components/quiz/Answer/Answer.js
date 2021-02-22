// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

// @material-ui
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

// @styles
import './Answer.scss';

const Answer = (props) => {
    const { answer, isAnswerCorrect } = props;

    return (
        <div
            className={className(
                'answer',
                'center-content',
                { 'answer--correct': isAnswerCorrect }
            )}
        >
            {(isAnswerCorrect) ? <CheckCircleOutlinedIcon /> : <CancelOutlinedIcon />}
            {answer}
        </div>
    );
};


Answer.propTypes = {
    answer: PropTypes.string.isRequired,
    isAnswerCorrect: PropTypes.bool.isRequired
};

export default Answer;
