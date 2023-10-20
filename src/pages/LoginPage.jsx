import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import { LoginInput } from "../components/LoginInput.jsx";
import bird_decor from "../assets/bird-decor.png";
import LoginLayout from "../layouts/LoginLayout.jsx";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessages, setErrorMessages] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login/checklogin",
        formData
      );
      console.log(response.data);
      console.log(response.status);
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

  return (
    <LoginLayout login>
      <div
        className="bg-white mx-auto px-4 py-3 text-center rounded-3 shadow position-relative"
        style={{ width: "450px", marginTop: "70px" }}
      >
        <h1 className="my-5">Đăng Nhập</h1>
        <form onSubmit={handleSubmit}>
          <img
            className="position-absolute"
            src={bird_decor}
            style={{ width: "120px", top: "-73px", right: "80px" }}
            alt=""
          />
          <LoginInput
            label="Tên đăng nhập"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mb-3"
            required
          />
          <LoginInput
            label="Mật khẩu"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="mb-4"
            required
          />
          <div className="mb-3">
            <button type="submit" className="btn btn-secondary w-100 p-3">
              Đăng nhập
            </button>
          </div>
          <div style={{ minHeight: "50px" }}>
            {errorMessages && <p style={{ color: "red" }}>{errorMessages}</p>}
          </div>

          <small>
            Bạn chưa có tài khoản?
            <a href="/sign-up"> Đăng ký</a>
          </small>
        </form>
      </div>
    </LoginLayout>
  );
}
