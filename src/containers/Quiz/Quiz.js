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
    const { quiz: { error, isFetching, results } } = props;

    const display = () => {
        if (_.isEmpty(results) && _.isEmpty(error)) {
            return (
                <div className="content-center">
                    <Link to="/" className="button-link">
                        <Button variant="contained" color="primary">Start</Button>
                    </Link>
                </div>
            );
        }

        return (<Quiz results={results} />);
    };


    return (
        <Card
            error={error}
            isFetching={isFetching}
            title="Quiz"
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
        error: PropTypes.shape({}),
        isFetching: PropTypes.bool,
        results: PropTypes.array
    }).isRequired
};

export default connect(
    mapStateToProps,
    null
)(QuizContainer);
