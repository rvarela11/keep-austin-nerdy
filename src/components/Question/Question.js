/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// @material-ui
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// @styles
import './Question.scss';

const Question = (props) => {
    const {
        item: {
            correct_answer,
            incorrect_answers,
            question
        }
    } = props;
    const answers = _.shuffle(incorrect_answers.concat(correct_answer));

    return (
        <>
            <Typography className="question" variant="p">{question}</Typography>
            {
                answers.map(answer => (
                    <Button
                        key={answer}
                        // disabled={!isValid}
                        onClick={() => console.log('Next')}
                        size="small"
                        variant="outlined"
                    >
                        {answer}
                    </Button>
                ))
            }
        </>
    );
};

Question.propTypes = {
    item: PropTypes.shape({
        correct_answer: PropTypes.string,
        incorrect_answers: PropTypes.array,
        question: PropTypes.string
    }).isRequired
};

export default Question;
