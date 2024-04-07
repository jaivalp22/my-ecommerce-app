import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ people }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const isAuthenticated = () => isLoggedIn;

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isAuthenticated }}>
      {people}
    </AuthContext.Provider>
  );
};