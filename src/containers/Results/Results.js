// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

// @components
import Card from '../../components/shared/card/Card';
import HomeLink from '../../components/shared/links/HomeLink/HomeLink';

const ResultsContainer = (props) => {
    const {
        quiz: {
            error,
            grade,
            results
        }
    } = props;
    const hideQuiz = _.isEmpty(results) && _.isEmpty(error);
    const subheader = (!_.isEmpty(results)) ? results[0].category : '';

    const display = () => {
        if (hideQuiz) {
            return (<HomeLink />);
        }

        return (
            <div>Results</div>
        );
    };

    return (
        <Card
            avatar_message={`${grade}%`}
            error={{}}
            isFetching={false}
            title="Results"
            subheader={subheader}
        >
            {display()}
        </Card>
    );
};

const mapStateToProps = state => ({
    quiz: state.quiz
});

ResultsContainer.propTypes = {
    quiz: PropTypes.shape({
        error: PropTypes.shape({}),
        grade: PropTypes.number,
        results: PropTypes.array
    }).isRequired
};

export default connect(
    mapStateToProps,
    null
)(ResultsContainer);
