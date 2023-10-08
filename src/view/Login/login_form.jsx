import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../AuthContext.jsx";
import { CustomLoginForm, SignUp, BirdDecor } from "./style_component";
import {
  CustomTitle,
  CustomInput,
  CustomLoginAndSignUpButton,
  LoginAndSignUpButton,
  Text,
} from "../../Components/Login-and-signup-form/index.jsx";
import { FormWrapper } from "../../Components/Header-section/style_component";
import bird_decor from "../../images/bird-decor.png";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessages, setErrorMessages] = useState("");

  const inputDiv = {
    marginBottom: "10px",
  };
  const mb4Div = {
    marginBottom: "40px",
  };
  const formCardDiv = {
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
    position: "relative",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login/checklogin",
        formData
      );
      console.log(response.data);
      if (response.status === 200) {
        const userData = response.data;
        const role = userData.role;
        const email = userData.email;
        const firstName = userData.firstName;
        const lastName = userData.lastName;
        const phone = userData.phone;

        formData.username &&
          role &&
          Cookies.set("loggedInUser", formData.username);
        formData.username && role && Cookies.set("userRole", role);

        login({
          username: formData.username,
          role,
          email,
          firstName,
          lastName,
          phone,
        });
        if (role === "admin") {
          navigate("/admin");
        } else if (role === "customer") {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Lỗi:", error);
      setErrorMessages("Sai tên đăng nhập hoặc mật khẩu ");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
        <CustomLoginForm style={formCardDiv}>
          <CustomTitle style={mb4Div}>Đăng Nhập</CustomTitle>

          <form onSubmit={handleSubmit}>
            <BirdDecor src={bird_decor} />
            <CustomInput
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={inputDiv}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              style={mb4Div}
            />

            {errorMessages ? (
              <p style={{ color: "red" }}>{errorMessages}</p>
            ) : null}
            <CustomLoginAndSignUpButton type="submit">
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
