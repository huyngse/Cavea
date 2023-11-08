import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import { CustomInput } from "../components/LoginInput.jsx";
import bird_decor from "../assets/bird-decor.png";
import LoginLayout from "../layouts/LoginLayout.jsx";
import axios from "axios";

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

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const navigate = useNavigate();
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlePasswordConfirmationChange = (event) => {
    const { value } = event.target;
    setPasswordConfirmation(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== passwordConfirmation) {
      setPasswordMismatchError(true);
      return;
    }
    try {
      const registrationResponse = await axios.post(
        "http://localhost:8089/login/register",
        formData
      );

      const emailResponse = await axios.post(
        "http://localhost:8080/sendemail/sendEmailVerify",
        { email: formData.email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (registrationResponse.status && emailResponse.status === 200) {
        navigate("/verify-email");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setPasswordMismatchError(false);
    }
  };

  return (
    <LoginLayout signup>
      <div
        className="bg-white mx-auto px-4 py-3 text-center rounded-3 shadow position-relative"
        style={{ width: "450px", marginTop: "70px" }}
      >
        <h1 className="my-5">Đăng Ký</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <img
              className="position-absolute"
              src={bird_decor}
              style={{ width: "120px", top: "-73px", right: "80px" }}
              alt=""
            />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              className="mb-4"
            >
              <Grid item xs={6}>
                <CssTextField
                  name="firstName"
                  label="Họ"
                  value={formData.firstName}
                  onChange={handleChange}
                ></CssTextField>
              </Grid>
              <Grid item xs={6}>
                <CssTextField
                  name="lastName"
                  label="Tên"
                  value={formData.lastName}
                  onChange={handleChange}
                ></CssTextField>
              </Grid>

              <Grid item xs={12}>
                <CssTextField
                  required
                  name="username"
                  label="Tên tài khoản"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                ></CssTextField>
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  type="email"
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                ></CssTextField>
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  type="password"
                  name="password"
                  label="Mật khẩu"
                  value={formData.password}
                  onChange={handleChange}
                ></CssTextField>
              </Grid>

              <Grid item xs={12}>
                <CssTextField
                  required
                  label="Xác nhận mật khẩu"
                  type="password"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={handlePasswordConfirmationChange}
                  autoComplete="current-password"
                ></CssTextField>
                {passwordMismatchError && (
                  <div style={{ color: "red" }}>
                    Mật khẩu và xác nhận mật khẩu không khớp.
                  </div>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className="mb-3">
                <button type="submit" className="btn btn-secondary w-100 p-3">
                  Đăng ký
                </button>
              </div>
              <div style={{ minHeight: "50px" }}></div>
              <small>
                Bạn đã có tài khoản?
                <a href="/login/*"> Đăng nhập</a>
              </small>
            </Grid>
          </form>
        </div>
      </div>
    </LoginLayout>
  );
}
