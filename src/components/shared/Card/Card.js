/* eslint-disable camelcase */
// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// @material-ui
import {
    Card, CardHeader, CardContent, CardActions
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// @components
import HomeLink from '../links/HomeLink/HomeLink';

// @styles
import './Card.scss';

const card = (props) => {
    const {
        actions,
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
        if (isFetching) {
            return (
                <div className="center-content">
                    <CircularProgress />
                </div>
            );
        }

        if (!_.isEmpty(error)) {
            return (
                <div className="center-content error">
                    <Typography variant="h2">Error</Typography>
                    <HomeLink label="Home" />
                </div>
            );
        }

        return children;
    };

    return (
        <Card className={`card ${className}`}>
            <CardHeader
                className="card-header"
                title={title}
                subheader={subheader}
                {...cardHeaderProps}
            />
            <CardContent className="card-content">
                {display()}
            </CardContent>
            { actions
                    && (
                        <CardActions className="card-actions">
                            {actions}
                        </CardActions>
                    )
            }
        </Card>
    );
};

card.propTypes = {
    actions: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
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
    actions: undefined,
    avatar_message: '',
    className: '',
    content_center: '',
    error: {},
    isFetching: false,
    title: '',
    subheader: ''
};

export default card;
