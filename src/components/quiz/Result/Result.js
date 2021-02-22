// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

// @material-ui
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

// @styles
import './Result.scss';

const Result = (props) => {
    const { answer, isAnswerCorrect } = props;

    const displayIcon = () => {
        if (isAnswerCorrect) {
            return (<CheckCircleOutlinedIcon />);
        }
        return (<CancelOutlinedIcon />);
    };

    return (
        <div
            className={className(
                'result-icon',
                'center-content',
                { 'result-icon--correct': isAnswerCorrect }
            )}
        >
            {displayIcon()}
            {answer}
        </div>
    );
};


Result.propTypes = {
    answer: PropTypes.string.isRequired,
    isAnswerCorrect: PropTypes.bool.isRequired
};

export default Result;
