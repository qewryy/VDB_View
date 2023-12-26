import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const isTokenExpired = (token) => {
    if (!token) {
        return true;
    }

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
    } catch (error) {
        console.error("Token decoding error:", error);
        return true;
    }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState({
        status: false,
        userId: null,
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');

        setAuthenticated({
            status: token && !isTokenExpired(token),
            userId: username,
        });
    }, []);

    const login = () => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');

        setAuthenticated({
            status: token && !isTokenExpired(token),
            userId: username,
        });
        alert('로그인 되었습니다.');
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');

        setAuthenticated({
            status: false,
            userId: null,
        });

        alert('로그아웃 되었습니다.');
    };

    return (
        <AuthContext.Provider value={{ authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};