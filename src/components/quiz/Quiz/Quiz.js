/* eslint-disable camelcase */
// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// @material-ui
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// @components
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

// @styles
import './Quiz.scss';

const initialState = {
    answer: '',
    answered: false,
    isAnswerCorrect: false
};

class Quiz extends Component {
    state = initialState;

    componentDidUpdate(prevProps) {
        const prevCurrent = prevProps.current;
        const { current } = this.props;

        if (!_.isEqual(prevCurrent, current)) {
            this.resetState();
        }
    }

    resetState = () => {
        this.setState(initialState);
    }

    handleAnswer = (answer, correct_answer) => {
        if (answer === correct_answer) {
            this.setState({ isAnswerCorrect: true });
        }

        this.setState({ answer, answered: true });
    };

    render() {
        const { answer, answered, isAnswerCorrect } = this.state;
        const {
            current,
            handleOnClickNext,
            results
        } = this.props;

        return (
            <div className="quiz">
                <Question
                    answered={answered}
                    handleAnswer={this.handleAnswer}
                    item={results[current]}
                />
                { answered
                    && <Answer answer={answer} isAnswerCorrect={isAnswerCorrect} />
                }
                <CardActions className="card-actions">
                    <Button
                        color="primary"
                        disabled={!answered}
                        onClick={handleOnClickNext}
                        size="small"
                        variant="contained"
                    >
                        Next
                    </Button>
                </CardActions>
            </div>
        );
    }
}

Quiz.propTypes = {
    current: PropTypes.number.isRequired,
    handleOnClickNext: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired
};

export default Quiz;
