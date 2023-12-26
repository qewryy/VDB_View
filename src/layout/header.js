// header.js
import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="main-header">
            <Link className='home-link' to="/">ViViD</Link>
            <div className="nav-links">
                <Link className="login-link" to="/login">Login</Link>
                <Link className="join-link" to="/join">Join</Link>
            </div>
        </header>
    );
}

export default Header;