import React from "react";
import LoginForm from "./login_form";
import Navbar from "../../Components/Navbar/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar showSignUp={true} size="small" />
      <LoginForm />
    </>
  );
};

export default LoginPage;
