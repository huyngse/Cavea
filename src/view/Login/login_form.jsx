import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import { CustomLoginForm, SignUp, BirdDecor } from "./style_component";
import {
  CustomError,
  CustomTitle,
  CustomInput,
  CustomLoginAndSignUpButton,
  LoginAndSignUpButton,
  Text,
} from "../../Components/Login-and-signup-form/index.jsx";
import { FormWrapper } from "../../Components/Header-section/style_component";
import bird_decor from "../../images/bird-decor.png";

import { useAuth } from "../../AuthContext.jsx";

function LoginForm() {
  const { login } = useAuth();
  const [errorMessages, setErrorMessages] = useState({});

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

  // STYLE COMPONENT
  const inputDiv = {
    marginBottom: '10px',
  }
  const mb4Div = {
    marginBottom: '40px',
  }
  const formCardDiv = {
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        login(userData.username);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <CustomError>{errorMessages.message}</CustomError>
    );

  const CssTextField = styled(CustomInput)({
    "& label.Mui-focused": {
      color: "#398378",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#398378",
      },
      "&:hover fieldset": {
        borderColor: "#398378",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#398378",
      },
    },
  });

  return (
    <>
     
      <FormWrapper>
        <CustomLoginForm style={formCardDiv} >
          <CustomTitle style={mb4Div}>Đăng Nhập</CustomTitle>

          <form onSubmit={handleSubmit}>
            <BirdDecor src={bird_decor} />
            <CssTextField
              label="Tên tài khoản hoặc email"
              type="text"
              name="uname"
              autoComplete="current-password"
              style={inputDiv}
            >
              {renderErrorMessage("pass")}
            </CssTextField>
            <CssTextField
              label="Mật khẩu"
              type="password"
              name="pass"
              autoComplete="current-password"
              style={mb4Div}
            >
              {renderErrorMessage("pass")}
            </CssTextField>
            <CustomLoginAndSignUpButton>
              <LoginAndSignUpButton>Đăng nhập</LoginAndSignUpButton>
            </CustomLoginAndSignUpButton>
            <Text>Bạn chưa có tài khoản Cavea?</Text>
            <SignUp href="/sign-up">Đăng ký</SignUp>
          </form>
        </CustomLoginForm>
      </FormWrapper>
    </>
  );
}
export default LoginForm;
