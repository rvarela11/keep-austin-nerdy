/* eslint-disable camelcase */
// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

// @material-ui
import Button from '@material-ui/core/Button';

// @components
import Card from '../../components/shared/card/Card';
import Quiz from '../../components/quiz/Quiz/Quiz';
import HomeLink from '../../components/shared/links/HomeLink/HomeLink';

// @actions
import { gradeAction, nextQuestionAction } from '../../store/actions/quiz/quiz';

// @utiles
import { RESULTS_ROUTE } from '../../utiles/routes';

const initialState = {
    answer: '',
    answered: false,
    isAnswerCorrect: false,
    hideQuiz: true
};

class QuizContainer extends Component {
    state = initialState;

    componentDidUpdate(prevProps) {
        const prevCurrent = prevProps.quiz.current;
        const prevResults = prevProps.quiz.results;
        const { quiz: { current, error, results } } = this.props;

        if (!_.isEqual(prevResults, results)) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                hideQuiz: _.isEmpty(results) && _.isEmpty(error)
            });
        }

        if (!_.isEqual(prevCurrent, current)) {
            this.resetState();
        }
    }

    resetState = () => {
        const { hideQuiz } = this.state;
        this.setState({
            ...initialState,
            hideQuiz
        });
    }

    handleAnswer = (answer, correct_answer) => {
        if (answer === correct_answer) {
            this.handleGrade();
            this.setState({ isAnswerCorrect: true });
        }

        this.setState({ answer, answered: true });
    };

    handleGrade = () => {
        const { gradeAction } = this.props;
        gradeAction();
    };

    handleOnClickNext = () => {
        const { nextQuestionAction } = this.props;
        nextQuestionAction();
    };

    handleOnClickFinish = () => {
        const { history } = this.props;
        history.replace(RESULTS_ROUTE);
    };

    display = () => {
        const {
            answer, answered, hideQuiz, isAnswerCorrect
        } = this.state;
        const {
            quiz: { current, results }
        } = this.props;

        if (hideQuiz) {
            return (<HomeLink className="center-content" />);
        }

        return (
            <Quiz
                answer={answer}
                answered={answered}
                current={current}
                handleAnswer={this.handleAnswer}
                isAnswerCorrect={isAnswerCorrect}
                results={results}
            />
        );
    };

    diplayButton = () => {
        const { answered, hideQuiz } = this.state;
        const { quiz: { current, results } } = this.props;
        const finish = ((current + 1) === results.length);
        const buttonProps = {
            onClick: this.handleOnClickNext,
            label: 'Next'
        };

        if (finish) {
            buttonProps.className = 'card-actions__finish';
            buttonProps.onClick = this.handleOnClickFinish;
            buttonProps.label = 'Finish';
        }

        return (
            !hideQuiz
            && (
                <Button
                    {...buttonProps}
                    color="primary"
                    disabled={!answered}
                    size="small"
                    variant="contained"
                >
                    {buttonProps.label}
                </Button>
            )
        );
    };

    render() {
        const {
            quiz: {
                current, error, grade, isFetching, results
            }
        } = this.props;
        const title = (!_.isEmpty(results)) ? results[0].category : 'Quiz';
        const subheader = (!_.isEmpty(results)) ? `${current + 1} of ${results.length}` : '';

        return (
            <Card
                actions={this.diplayButton()}
                avatar_message={`${grade}%`}
                error={error}
                isFetching={isFetching}
                title={title}
                subheader={subheader}
            >
                {this.display()}
            </Card>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    gradeAction: () => dispatch(gradeAction()),
    nextQuestionAction: () => dispatch(nextQuestionAction())
});

const mapStateToProps = state => ({
    quiz: state.quiz
});

QuizContainer.propTypes = {
    gradeAction: PropTypes.func.isRequired,
    history: PropTypes.shape({
        replace: PropTypes.func
    }).isRequired,
    nextQuestionAction: PropTypes.func.isRequired,
    quiz: PropTypes.shape({
        current: PropTypes.number,
        error: PropTypes.shape({}),
        grade: PropTypes.number,
        isFetching: PropTypes.bool,
        results: PropTypes.array
    }).isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizContainer);
