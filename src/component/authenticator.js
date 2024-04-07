import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ people }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>
      {people}
    </AuthContext.Provider>
  );
};