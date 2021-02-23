// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// @material-ui
import Button from '@material-ui/core/Button';

const HomeLink = (props) => {
    const { label } = props;

    return (
        <div className="center-content">
            <Link to="/" className="button-link">
                <Button variant="contained" color="primary">{label}</Button>
            </Link>
        </div>
    );
};

HomeLink.propTypes = {
    label: PropTypes.string
};

HomeLink.defaultProps = {
    label: 'Start'
};

export default HomeLink;
