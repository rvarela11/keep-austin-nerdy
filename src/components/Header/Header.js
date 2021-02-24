// @vendors
import React from 'react';
import { Link } from 'react-router-dom';

// @utiles
import { HOME_ROUTE } from '../../utiles/routes';

// @styles
import './Header.scss';

const Header = () => (
    <div className="header">
        <Link to={HOME_ROUTE} className="header__logo" />
    </div>
);

export default Header;
