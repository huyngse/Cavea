import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginForm from "./login_form";
import NavbarForHomePage from "../../Components/Navbar/navbar_for_home_page.jsx";
import Navbar from "../../Components/Navbar/index";
import Index from "../../view/index";

import { useAuth } from "../../AuthContext.jsx";

const LoginPage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <Routes>
          <Route path="/" exact element={<Index />} />
        </Routes>
      ) : (
        <>
          <NavbarForHomePage isSearchVisible={false} signUp={true} />
          <LoginForm />
        </>
      )}
    </div>
  );
};

export default LoginPage;
