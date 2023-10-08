import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [userRole, setUserRole] = useState({});
  const [userEmail, setUserEmail] = useState({});
  const [userFirstName, setUserFirstName] = useState({});
  const [userLastName, setUserLastName] = useState({});
  const [userPhone, setUserPhone] = useState({});

  const login = (userData) => {
    Cookies.set("loggedInUser", userData.username, { expires: 1 });
    setLoggedInUser(userData.username);
    setUserRole(userData.role);
    setUserEmail(userData.email);
    setUserFirstName(userData.firstName);
    setUserLastName(userData.lastName);
    setUserPhone(userData.phone);
  };

  const logout = () => {
    Cookies.remove("loggedInUser");
    Cookies.remove("userRole");
    setLoggedInUser(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        userRole,
        userEmail,
        userFirstName,
        userLastName,
        userPhone,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
