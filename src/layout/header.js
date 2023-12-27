import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import './layout.css';

function Header() {
    const { authenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <header className="main-header">
            <Link className='home-link' to="/">ViViD</Link>
            <div className="nav-links">
            {!authenticated.status ? (
                <>
                    <Link className="login-link" to="/login">Login</Link>
                    <Link className="join-link" to="/join">Join</Link>
                </>
            ) : (
                <>
                    <span className="user-id">사용자 명 : {authenticated.userId}</span>
                    <Link className="info-link" to="/userinfo">Info</Link>
                    <Link className="logout-link" onClick={handleLogout} to="/">Logout</Link>
                </>
            )}
        </div>
        </header>
    );
}

export default Header;