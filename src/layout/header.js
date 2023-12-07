import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

function header() {
    return (
        <header className="main-header">
            <Link className='home-link' to="/">ViViD</Link>
            <Link className="login-link" to="/login">Login</Link>
        </header>
    );
}

export default header;