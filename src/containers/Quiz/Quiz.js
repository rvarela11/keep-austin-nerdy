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
import Quiz from '../../components/Quiz/Quiz';

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

    const title = () => {
        let title = 'Quiz';
        if (!_.isEmpty(results)) {
            title = results[0].category;
        }
        return title;
    };

    const subheader = () => {
        let subheader = '';
        if (!_.isEmpty(results)) {
            subheader = `${current} of ${results.length}`;
        }
        return subheader;
    };

    const handleOnClickNext = () => {
        console.log('handleOnClickNext');
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

        return (<Quiz current={current} handleOnClickNext={handleOnClickNext} results={results} />);
    };

    return (
        <Card
            avatar_message={(hideQuiz) ? '' : `${grade}%`}
            error={error}
            isFetching={isFetching}
            title={title()}
            subheader={subheader()}
        >
            {display()}
        </Card>
    );
};
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
    }).isRequired
};

export default connect(
    mapStateToProps,
    null
)(QuizContainer);
