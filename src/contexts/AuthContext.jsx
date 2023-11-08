import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
  const login = (userData) => {
    setUserInfo(userData);
    localStorage.setItem("userInfo", userData);
  };
  const logout = () => {
    setUserInfo(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      setUserInfo({
        address: "",
        email: "",
        phoneNumber: "",
        userName: "",
      });
    } else {
      return <Navigate to="/login" />;
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        userInfo,
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
