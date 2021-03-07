// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

// @components
import Card from '../../components/shared/card/Card';
import Results from '../../components/Results/Results';
import HomeLink from '../../components/shared/links/HomeLink/HomeLink';

export const ResultsContainer = (props) => {
    const {
        quiz: {
            error, grade, isFetching, results
        }
    } = props;
    const hideQuiz = _.isEmpty(results) && _.isEmpty(error);
    const subheader = (!_.isEmpty(results)) ? results[0].category : '';

    const display = () => {
        if (hideQuiz) {
            return (<HomeLink className="center-content" />);
        }

        return (
            <Results results={results} />
        );
    };

    const diplayButton = () => (
        !hideQuiz
            && <HomeLink label="Restart" />
    );

    return (
        <Card
            actions={diplayButton()}
            avatar_message={`${grade}%`}
            error={error}
            isFetching={isFetching}
            title="Results"
            subheader={subheader}
        >
            {display()}
        </Card>
    );
};

export const mapStateToProps = state => ({
    quiz: state.quiz
});

ResultsContainer.propTypes = {
    quiz: PropTypes.shape({
        error: PropTypes.shape({}),
        grade: PropTypes.number,
        isFetching: PropTypes.bool,
        results: PropTypes.array
    }).isRequired
};

export default connect(
    mapStateToProps,
    null
)(ResultsContainer);
