import React, { useState } from "react";

import { CustomLoginForm, SignUp, BirdDecor } from "./style_component";
import {
  CustomError,
  CustomTitle,
  CustomInput,
  CustomLoginAndSignUpButton,
  LoginAndSignUpButton,
  Text,
} from "../../Components/Login-and-signup-form";
import { FormWrapper } from "../../Components/Header/style_component";
import bird_decor from "../../images/bird-decor.png";

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

  return (
    <>
      <FormWrapper>
        <CustomLoginForm>
          <CustomTitle>Log In</CustomTitle>
          {isSubmitted ? (
            <div>User is successfully logged in</div>
          ) : (
            <div>
              <form onSubmit={handleSubmit}>
                <BirdDecor src={bird_decor} />
                <CustomInput
                  label="Username"
                  type="text"
                  name="uname"
                  autoComplete="current-password"
                >
                  {renderErrorMessage("pass")}
                </CustomInput>
                <CustomInput
                  label="Password"
                  type="password"
                  name="pass"
                  autoComplete="current-password"
                >
                  {renderErrorMessage("pass")}
                </CustomInput>
                <CustomLoginAndSignUpButton>
                  <LoginAndSignUpButton>Log In</LoginAndSignUpButton>
                </CustomLoginAndSignUpButton>
                <Text>You don't have an account yet?</Text>
                <SignUp href="/sign-up">Create an account</SignUp>
              </form>
            </div>
          )}
        </CustomLoginForm>
      </FormWrapper>
    </>
  );
}
export default LoginForm;
