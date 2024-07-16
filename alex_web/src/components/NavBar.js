import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    );
};

export default NavBar;