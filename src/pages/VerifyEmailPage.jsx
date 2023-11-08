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

export default function VerifyTokenPage() {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  console.log(token);
  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8089/login/registerVerify",
        {
          token: token,
        }
      );
      if (response.status === 200) {
        navigate("/login");
      } else {
        setMessage("Failed to send token verification code.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <LoginLayout login>
      <div
        className="bg-white mx-auto px-4 py-3 text-center rounded-3 shadow position-relative"
        style={{ width: "450px", marginTop: "70px" }}
      >
        <h1 className="my-5">Xác nhận email</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <img
              className="position-absolute"
              src={bird_decor}
              style={{ width: "120px", top: "-73px", right: "80px" }}
              alt=""
            />
            <Grid item xs={12}>
              <CssTextField
                type="token"
                name="token"
                label="Token"
                value={token}
                onChange={handleTokenChange}
              ></CssTextField>
            </Grid>
            <Grid item xs={12}>
              <div className="mb-3">
                <button type="submit" className="btn btn-secondary w-100 p-3">
                  Xác nhận
                </button>
              </div>
              <div style={{ minHeight: "50px" }}>
                {message && <p style={{ color: "red" }}>{message}</p>}
              </div>
              <div style={{ minHeight: "50px" }}></div>
              <small>
                <a href="/sign-up" onClick={() => navigate("/sign-up")}>
                  Quay lại đăng ký
                </a>
              </small>
              <small>
                Bạn đã có tài khoản?
                <a href="/login/*" onClick={() => navigate("/login/*")}>
                  Đăng nhập
                </a>
              </small>
            </Grid>
          </form>
        </div>
      </div>
    </LoginLayout>
  );
}
