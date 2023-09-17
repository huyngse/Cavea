import React, { useState } from "react";

import LoginForm from "./login_form";
import NavbarForHomePage from "../../Components/Navbar/navbar_for_home_page.jsx";
import Navbar from "../../Components/Navbar/index";

import { useAuth } from "../../AuthContext.jsx";

const LoginPage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <>
          <Navbar />
          <div>admin page</div>
        </>
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
