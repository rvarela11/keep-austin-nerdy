// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import Page from '../Page';
import QuizContainer from '../../../../containers/Quiz/Quiz';

export const Quiz = ({ history }) => (
    <Page>
        <QuizContainer history={history} />
    </Page>
);

Quiz.propTypes = {
    history: PropTypes.shape({}).isRequired
};

export default Quiz;
