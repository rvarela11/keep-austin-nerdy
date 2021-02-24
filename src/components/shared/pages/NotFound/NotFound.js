// @vendors
import React from 'react';

// @material-ui
import Typography from '@material-ui/core/Typography';

// @components
import Page from '../Page';
import HomeLink from '../../links/HomeLink/HomeLink';

// @styles
import './NotFound.scss';

export const NotFound = () => (
    <Page>
        <div className="not-found">
            <Typography className="not-found__title" variant="h2">Page Not Found</Typography>
            <HomeLink label="Home" />
        </div>
    </Page>
);

export default NotFound;
