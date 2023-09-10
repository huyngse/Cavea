import React, { useState } from "react";

import "../../css/Ceave.css";
import HeaderForHomePage from "../../Components/Header/Header-for-home-page";
import {
  FormWrapper,
  Input,
  CustomLoginForm,
  CustomError,
} from "./Style-component";
import Buttons from "../../Components/Button/Button";

function LoginForm() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <CustomError>{errorMessages.message}</CustomError>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <Input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <Input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="sign-in-button">
          <Buttons>Sign in</Buttons>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <HeaderForHomePage />
      <FormWrapper>
        <CustomLoginForm>
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </CustomLoginForm>
      </FormWrapper>
    </>
  );
}
export default LoginForm;
