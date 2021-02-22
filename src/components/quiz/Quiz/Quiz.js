/* eslint-disable camelcase */
// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import className from 'classnames';

// @material-ui
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

// @components
import Question from '../Question/Question';

// @styles
import './Quiz.scss';

class Quiz extends Component {
    state = {
        answer: '',
        answered: false,
        isAnswerCorrect: false
    }

    componentDidUpdate(prevProps) {
        const prevCurrent = prevProps.current;
        const { current } = this.props;

        if (!_.isEqual(prevCurrent, current)) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ answered: false, isAnswerCorrect: false });
        }
    }

    handleAnswer = (answer) => {
        const { current, results } = this.props;
        const item = results[current];
        const { correct_answer } = item;

        if (answer === correct_answer) {
            this.setState({ isAnswerCorrect: true });
        }

        this.setState({ answer, answered: true });
    };

    getIcon = () => {
        const { isAnswerCorrect } = this.state;
        if (isAnswerCorrect) {
            return (<CheckCircleOutlinedIcon />);
        }
        return (<CancelOutlinedIcon />);
    }

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
                    && (
                        <div
                            className={className(
                                'result-icon',
                                'center-content',
                                { 'result-icon--correct': isAnswerCorrect }
                            )}
                        >
                            {this.getIcon()}
                            {answer}
                        </div>
                    )
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
