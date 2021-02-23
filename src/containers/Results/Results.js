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

const ResultsContainer = (props) => {
    return (
        <Card
            error={{}}
            isFetching={false}
            title="Results"
        >
            Results
        </Card>
    );
};

const mapStateToProps = state => ({});

ResultsContainer.propTypes = {
};

export default connect(
    mapStateToProps,
    null
)(ResultsContainer);
