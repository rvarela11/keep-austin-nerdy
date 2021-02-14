// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './Page.scss';

const Page = (props) => {
    const { children } = props;
    return (
        <div className="page">{children}</div>
    );
};

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Page;
