// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// @material-ui
import Button from '@material-ui/core/Button';

const HomeLink = (props) => {
    const { className, label } = props;

    return (
        <div className={className}>
            <Link to="/" className="button-link">
                <Button variant="contained" color="primary">{label}</Button>
            </Link>
        </div>
    );
};

HomeLink.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string
};

HomeLink.defaultProps = {
    className: '',
    label: 'Start'
};

export default HomeLink;
