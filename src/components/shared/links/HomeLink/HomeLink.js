// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// @material-ui
import Button from '@material-ui/core/Button';

// @utiles
import { HOME_ROUTE } from '../../../../utiles/routes';

const HomeLink = (props) => {
    const { className, label } = props;

    return (
        <div className={className}>
            <Link to={HOME_ROUTE} className="button-link">
                <Button color="primary" size="small" variant="contained">{label}</Button>
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
