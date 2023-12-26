import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext'; // Update the path accordingly
import './header.css';

function Header() {
  const { authenticated, logout } = useAuth();

return (
    <header className="main-header">
        <Link className='home-link' to="/">ViViD</Link>
        <div className="nav-links">
        {!authenticated.userId ? (
            <>
                <Link className="login-link" to="/login">Login</Link>
                <Link className="join-link" to="/join">Join</Link>
            </>
        ) : (
            <>
                <span className="user-id">사용자 명 : {authenticated.userId}</span>
                <Link className="logout-link" onClick={logout}>Logout</Link>
            </>
        )}
    </div>
    </header>
);
}

export default Header;