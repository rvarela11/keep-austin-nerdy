// @vendors
import React from 'react';
import { Link } from 'react-router-dom';

// @utiles
import { BASE_ROUTE } from '../../utiles/routes';

// @styles
import './Header.scss';

const Header = () => (
    <div className="header">
        <Link to={BASE_ROUTE} className="header__logo" />
    </div>
);

export default Header;
