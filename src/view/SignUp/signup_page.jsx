import React from "react";
import SignUpForm from "./signup_form";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const SignUp = () => {
  return (
    <div>
      <Navbar isSearchVisible={false} showLogin={true} size="small" />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
