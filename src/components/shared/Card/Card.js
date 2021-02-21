// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// @material-ui
import { Card, CardHeader, CardContent } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

// @styles
import './Card.scss';

export const card = (props) => {
    const {
        children,
        className,
        error,
        isFetching,
        title
    } = props;

    const display = () => {
        if (!_.isEmpty(error)) {
            return <div>Error</div>;
        }

        if (isFetching) {
            return <CircularProgress />;
        }

        return children;
    };

    return (
        <Card className={`card ${className}`}>
            <CardHeader title={title} />
            <CardContent className="card-content">
                {display()}
            </CardContent>
        </Card>
    );
};

card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    error: PropTypes.shape({}),
    isFetching: PropTypes.bool,
    title: PropTypes.string
};

card.defaultProps = {
    className: '',
    error: {},
    isFetching: false,
    title: ''
};

export default card;
