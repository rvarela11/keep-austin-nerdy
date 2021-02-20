// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

// @styles
import './Page.scss';

const Page = (props) => {
    const { children, isFetching } = props;

    const display = () => {
        if (isFetching) {
            return <CircularProgress />;
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
    isFetching: PropTypes.bool.isRequired
};

export default Page;
