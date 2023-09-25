import * as React from 'react';
import '../SignUp/signup_form.css'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from "@mui/material/styles";

import { CustomLoginForm, SignUp, BirdDecor } from "../Login/style_component";
import {
  CustomError,
  CustomTitle,
  CustomInput,
  CustomLoginAndSignUpButton,
  LoginAndSignUpButton,
  Text,
} from "../../Components/Login-and-signup-form/index.jsx";
import { FormWrapper } from "../../Components/Header/style_component";
import bird_decor from "../../images/bird-decor.png";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUpForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <FormWrapper>
        <CustomLoginForm>
          <CustomTitle>Sign UP</CustomTitle>

          <div>

            <form onSubmit={handleSubmit}>
              <BirdDecor src={bird_decor} />
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <CssTextField
                    label="Username"
                    type="text"
                    name="uname"
                    autoComplete="current-password"
                  >

                  </CssTextField>
                </Grid>
                <Grid item xs={6}>
                  <CssTextField
                    label="First Name"
                    type="text"
                    name="uname"
                    autoComplete="current-password"
                  >

                  </CssTextField>
                </Grid>
                <Grid item xs={6}>
                  <CssTextField
                    label="Password"
                    type="password"
                    name="pass"
                    autoComplete="current-password"
                  >

                  </CssTextField>
                </Grid>
                <Grid item xs={6}>
                  <CssTextField
                    label="Last Name"
                    type="text"
                    name="uname"
                    autoComplete="current-password"
                  >

                  </CssTextField>
                </Grid>


                <Grid item xs={6}>
                  <CssTextField
                    label="Re-enter password"
                    type="password"
                    name="pass"
                    autoComplete="current-password"
                  >

                  </CssTextField>
                </Grid>
                <Grid item xs={6}>
                  <CssTextField
                    label="Sex"
                    type="text"
                    name="uname"
                    autoComplete="current-password"
                  >

                  </CssTextField>
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>

                    
                      <DatePicker label="Birthday" />
                    
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12}>
                  <CustomLoginAndSignUpButton>

                    <LoginAndSignUpButton>Sign Up</LoginAndSignUpButton>
                  </CustomLoginAndSignUpButton>
                  <Text>You already have an account yet?</Text>
                  <SignUp href="/login-page">Login here</SignUp>
                </Grid>



              </Grid>
            </form>

          </div>

        </CustomLoginForm>
      </FormWrapper >
    </>
  );
}
