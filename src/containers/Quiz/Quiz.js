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
import { nextQuestionAction } from '../../store/actions/quiz/quiz';

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
    const subheader = (!_.isEmpty(results)) ? `${current} of ${results.length}` : '';

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
    nextQuestionAction: () => dispatch(nextQuestionAction())
});

const mapStateToProps = state => ({
    quiz: state.quiz
});

QuizContainer.propTypes = {
    quiz: PropTypes.shape({
        current: PropTypes.number,
        error: PropTypes.shape({}),
        grade: PropTypes.number,
        isFetching: PropTypes.bool,
        results: PropTypes.array
    }).isRequired,
    nextQuestionAction: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizContainer);
