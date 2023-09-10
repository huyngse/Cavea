import React, { useState } from "react";

import HeaderForHomePage from "../../Components/Header/Header-for-home-page";
import {
  FormWrapper,
  CustomLoginForm,
  CustomError,
  CustomTitle,
  CustomContainer,
  SignInButton,
  CustomSignInButton,
  SignUp,
  Text,
} from "./Style-component";

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
    <div>
      <form onSubmit={handleSubmit}>
        <CustomContainer
          label="Username"
          type="text"
          name="uname"
          autoComplete="current-password"
        >
          {renderErrorMessage("pass")}
        </CustomContainer>
        <CustomContainer
          label="Password"
          type="password"
          name="pass"
          autoComplete="current-password"
        >
          {renderErrorMessage("pass")}
        </CustomContainer>
        <SignInButton>
          <CustomSignInButton>Log In</CustomSignInButton>
        </SignInButton>
        <Text>You don't have an account yet?</Text>
        <SignUp href="/sign-up">Create an account</SignUp>
      </form>
    </div>
  );

  return (
    <>
      <HeaderForHomePage isSearchVisible={false} />
      <FormWrapper>
        <CustomLoginForm>
          <CustomTitle>Log In</CustomTitle>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </CustomLoginForm>
      </FormWrapper>
    </>
  );
}
export default LoginForm;
