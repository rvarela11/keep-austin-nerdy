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
        const { handleGrade } = this.props;

        if (answer === correct_answer) {
            handleGrade();
            this.setState({ isAnswerCorrect: true });
        }

        this.setState({ answer, answered: true });
    };

    diplayButton = () => {
        const { answered } = this.state;
        const {
            current,
            handleOnClickNext,
            handleOnClickFinish,
            results
        } = this.props;
        const finish = ((current + 1) === results.length);
        const buttonProps = {
            onClick: handleOnClickNext,
            label: 'Next'
        };

        if (finish) {
            buttonProps.className = 'card-actions__finish';
            buttonProps.onClick = handleOnClickFinish;
            buttonProps.label = 'Finish';
        }

        return (
            <Button
                {...buttonProps}
                color="primary"
                disabled={!answered}
                size="small"
                variant="contained"
            >
                {buttonProps.label}
            </Button>
        );
    }

    render() {
        const { answer, answered, isAnswerCorrect } = this.state;
        const { current, results } = this.props;

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
                    {this.diplayButton()}
                </CardActions>
            </div>
        );
    }
}

Quiz.propTypes = {
    current: PropTypes.number.isRequired,
    handleGrade: PropTypes.func.isRequired,
    handleOnClickNext: PropTypes.func.isRequired,
    handleOnClickFinish: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired
};

export default Quiz;
