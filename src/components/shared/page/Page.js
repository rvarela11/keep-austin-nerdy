// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

// @styles
import './Page.scss';

const Page = (props) => {
    const { children, error, isFetching } = props;

    const display = () => {
        if (isFetching) {
            return <CircularProgress />;
        }

        if (!_.isEmpty(error)) {
            return <div>Error</div>;
        }

        return children;
    };

    return (
        <div className="page">
            {display()}
        </div>
    );
};

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    error: PropTypes.shape({}).isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default Page;
