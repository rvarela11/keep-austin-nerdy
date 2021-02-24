// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

// @components
import Card from '../../components/shared/card/Card';
import Quiz from '../../components/quiz/Quiz/Quiz';
import HomeLink from '../../components/shared/links/HomeLink/HomeLink';

// @actions
import { gradeAction, nextQuestionAction } from '../../store/actions/quiz/quiz';

// @utiles
import { RESULTS_ROUTE } from '../../utiles/routes';

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

    const handleOnClickFinish = () => {
        const { history } = props;
        history.replace(RESULTS_ROUTE);
    };

    const display = () => {
        if (hideQuiz) {
            return (<HomeLink className="center-content" />);
        }

        return (
            <Quiz
                current={current}
                handleOnClickNext={handleOnClickNext}
                handleOnClickFinish={handleOnClickFinish}
                handleGrade={handleGrade}
                results={results}
            />
        );
    };

    return (
        <Card
            avatar_message={`${grade}%`}
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
    history: PropTypes.shape({
        replace: PropTypes.func
    }).isRequired,
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
