import React from "react";
import SignUpForm from "./signup_form";
import Navbar from "../../Components/Navbar/index.jsx";

const SignUp = () => {
  

  return (
    <div>
          <Navbar isSearchVisible={false} login={true} />
          <SignUpForm  />
    </div>
  );
};

export default SignUp;
