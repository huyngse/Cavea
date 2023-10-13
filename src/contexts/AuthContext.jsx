import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userPhone, setUserPhone] = useState(null);

  const login = (userData) => {
    Cookies.set("loggedInUser", userData.username, { expires: 1 });
    Cookies.set("userRole", userData.role, { expires: 1 });
    Cookies.set("email", userData.email, { expires: 1 });
    Cookies.set("firstName", userData.firstName, { expires: 1 });
    Cookies.set("lastName", userData.lastName, { expires: 1 });
    Cookies.set("phone", userData.phone, { expires: 1 });
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
    Cookies.remove("email");
    Cookies.remove("firstName");
    Cookies.remove("lastName");
    Cookies.remove("phone");

    setLoggedInUser(null);
    setUserRole(null);
    setUserEmail(null);
    setUserFirstName(null);
    setUserLastName(null);
    setUserPhone(null);
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
