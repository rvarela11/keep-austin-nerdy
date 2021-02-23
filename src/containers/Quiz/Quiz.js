// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

// @material-ui
import Button from '@material-ui/core/Button';

// @components
import Card from '../../components/shared/card/Card';
import Quiz from '../../components/quiz/Quiz/Quiz';

// @actions
import { gradeAction, nextQuestionAction } from '../../store/actions/quiz/quiz';

const QuizContainer = (props) => {
    const {
        quiz: {
            current,
            error,
            grade,
            isFetching,
            results
        }
    } = props;
    const hideQuiz = _.isEmpty(results) && _.isEmpty(error);
    const title = (!_.isEmpty(results)) ? results[0].category : 'Quiz';
    const subheader = (!_.isEmpty(results)) ? `${current + 1} of ${results.length}` : '';

    const handleGrade = () => {
        const { gradeAction } = props;
        gradeAction();
    };

    const handleOnClickNext = () => {
        const { nextQuestionAction } = props;
        nextQuestionAction();
    };

    const display = () => {
        if (hideQuiz) {
            return (
                <div className="center-content">
                    <Link to="/" className="button-link">
                        <Button variant="contained" color="primary">Start</Button>
                    </Link>
                </div>
            );
        }

        return (
            <Quiz
                current={current}
                handleOnClickNext={handleOnClickNext}
                handleGrade={handleGrade}
                results={results}
            />
        );
    };

    return (
        <Card
            avatar_message={(hideQuiz) ? '' : `${grade}%`}
            error={error}
            isFetching={isFetching}
            title={title}
            subheader={subheader}
        >
            {display()}
        </Card>
    );
};

const mapDispatchToProps = dispatch => ({
    gradeAction: () => dispatch(gradeAction()),
    nextQuestionAction: () => dispatch(nextQuestionAction())
});

const mapStateToProps = state => ({
    quiz: state.quiz
});

QuizContainer.propTypes = {
    gradeAction: PropTypes.func.isRequired,
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
