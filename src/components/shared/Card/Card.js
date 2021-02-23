/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// @material-ui
import { Card, CardHeader, CardContent } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';

// @styles
import './Card.scss';

export const card = (props) => {
    const {
        avatar_message,
        children,
        className,
        error,
        isFetching,
        title,
        subheader
    } = props;
    const cardHeaderProps = {};

    if (avatar_message) {
        cardHeaderProps.avatar = (<Avatar className="card-header__avatar">{avatar_message}</Avatar>);
    }

    const display = () => {
        if (!_.isEmpty(error)) {
            return (
                <div className="center-content">
                    Error
                </div>
            );
        }

        if (isFetching) {
            return (
                <div className="center-content">
                    <CircularProgress />
                </div>
            );
        }

        return children;
    };

    return (
        <Card className={`card ${className}`}>
            <CardHeader
                title={title}
                subheader={subheader}
                {...cardHeaderProps}
            />
            <CardContent className="card-content">
                {display()}
            </CardContent>
        </Card>
    );
};

card.propTypes = {
    avatar_message: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    error: PropTypes.shape({}),
    isFetching: PropTypes.bool,
    title: PropTypes.string,
    subheader: PropTypes.string
};

card.defaultProps = {
    avatar_message: '',
    className: '',
    content_center: '',
    error: {},
    isFetching: false,
    title: '',
    subheader: ''
};

export default card;
