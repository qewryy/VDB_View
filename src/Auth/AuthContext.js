import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState({
    status: false,
    userId: null
});

  const login = (userId) => {
    setAuthenticated({
        status: true,
        userId: userId
    });
    alert('로그인 되었습니다.');
  };

  const logout = () => {
    setAuthenticated({
        status: false,
        userId: null
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