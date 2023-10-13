import * as React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { CustomInput } from "../components/LoginInput.jsx";
import bird_decor from "../assets/bird-decor.png";
import LoginLayout from "../layouts/LoginLayout.jsx";
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <LoginLayout signup>
      <div className="bg-white mx-auto px-4 py-3 text-center rounded-3 shadow position-relative" style={{ width: "450px", marginTop: "70px" }}>
        <h1 className="my-5">Đăng Ký</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <img className="position-absolute" src={bird_decor} style={{ width: "120px", top: "-73px", right: "80px" }} alt="" />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              className="mb-4"
            >
              <Grid item xs={6}>
                <CssTextField
                  required
                  label="Họ"
                  type="text"
                  name="uname"
                ></CssTextField>
              </Grid>
              <Grid item xs={6}>
                <CssTextField
                  required
                  label="Tên"
                  type="text"
                  name="uname"
                ></CssTextField>
              </Grid>

              <Grid item xs={12}>
                <CssTextField
                  required
                  label="Tên tài khoản"
                  type="text"
                  name="uname"
                  autoComplete="current-password"
                ></CssTextField>
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  label="Email"
                  type="text"
                  name="uname"
                  autoComplete="current-password"
                ></CssTextField>
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  label="Mật khẩu"
                  type="password"
                  name="pass"
                  autoComplete="current-password"
                ></CssTextField>
              </Grid>

              <Grid item xs={12}>
                <CssTextField
                  required
                  label="Xác nhận mật khẩu"
                  type="password"
                  name="pass"
                  autoComplete="current-password"
                ></CssTextField>
              </Grid>
            </Grid>
          </form>
          <Grid item xs={12}>
            <div className="mb-3">
              <button type="submit" className="btn btn-secondary w-100 p-3">
                Đăng nhập
              </button>
            </div>
            <div style={{ minHeight: "50px" }}>

            </div>
            <small>Bạn đã có tài khoản?
              <a href="/login-page"> Đăng nhập</a>
            </small>
          </Grid>
        </div>
      </div>
    </LoginLayout>
  );
}
