// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

// @material-ui
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// @components
import Question from '../Question/Question';

// @styles
import './Quiz.scss';

export const Quiz = (props) => {
    const {
        current,
        handleOnClickNext,
        results
    } = props;
    const isButtonVisible = true;

    return (
        <div className="quiz">
            <Question item={results[current]} />
            <CardActions
                className={className(
                    'card-actions',
                    { 'card-actions--hide': !isButtonVisible }
                )}
            >
                <Button
                    color="primary"
                    // disabled={!isQuestionAnswered}
                    onClick={handleOnClickNext}
                    size="small"
                    variant="contained"
                >
                    Next
                </Button>
            </CardActions>
        </div>
    );
};

Quiz.propTypes = {
    current: PropTypes.number.isRequired,
    handleOnClickNext: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired
};

export default Quiz;
