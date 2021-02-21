// @vendors
import React from 'react';
import { Link } from 'react-router-dom';

// @styles
import './Header.scss';

const Header = () => (
    <div className="header">
        <Link to="/" className="header__logo" />
    </div>
);

export default Header;
