// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import Page from '../Page';
import FormContainer from '../../../../containers/Form/Form';

export const Home = ({ history }) => (
    <Page>
        <FormContainer history={history} />
    </Page>
);

Home.propTypes = {
    history: PropTypes.shape({}).isRequired
};

export default Home;
