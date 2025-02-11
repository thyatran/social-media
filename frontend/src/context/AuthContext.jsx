import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-nextline react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    return JSON.parse(localStorage.getItem("logged-in-user")) || null;
  });

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
