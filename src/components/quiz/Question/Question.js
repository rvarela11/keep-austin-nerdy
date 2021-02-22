/* eslint-disable camelcase */
// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// @material-ui
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// @styles
import './Question.scss';

class Question extends Component {
    state = {
        answers: []
    }

    componentDidMount() {
        this.shuffleAnswers();
    }

    componentDidUpdate(prevProps) {
        const prevItem = prevProps.item;
        const { item } = this.props;
        if (!_.isEqual(prevItem, item)) {
            this.shuffleAnswers();
        }
    }

    shuffleAnswers = () => {
        const {
            item: {
                correct_answer,
                incorrect_answers
            }
        } = this.props;
        this.setState({
            answers: _.shuffle(incorrect_answers.concat(correct_answer))
        });
    }

    render() {
        const { answers } = this.state;
        const {
            answered,
            handleAnswer,
            item: { question }
        } = this.props;

        return (
            <>
                <Typography className="question" variant="body1">{question}</Typography>
                {
                    answers.map(answer => (
                        <Button
                            key={answer}
                            disabled={answered}
                            onClick={() => handleAnswer(answer)}
                            size="small"
                            variant="outlined"
                        >
                            {answer}
                        </Button>
                    ))
                }
            </>
        );
    }
}

Question.propTypes = {
    answered: PropTypes.bool.isRequired,
    handleAnswer: PropTypes.func.isRequired,
    item: PropTypes.shape({
        correct_answer: PropTypes.string,
        incorrect_answers: PropTypes.array,
        question: PropTypes.string
    }).isRequired
};

export default Question;
