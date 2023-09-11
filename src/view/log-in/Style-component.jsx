import styled from "@emotion/styled";
import background from "../../images/background.png";
import { Button } from "reactstrap";
import TextField from "@mui/material/TextField";

export const FormWrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  height: 88vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CustomLoginForm = styled.div`
  max-width: 26rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 145px;
  padding: 2.25rem 1.25rem 1.25rem 1.25rem;
  border-radius: 0.5rem;
  background-color: #f3f7fd;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  width: 100%;
`;

export const CustomTitle = styled.div`
  color: #374151;
  font: 700 2.5rem/3.125rem "Open Sans", sans-serif;
  letter-spacing: -0.2px;
`;

export const CustomInput = styled(TextField)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 40px;
  background: #ffffff;
  border-color: #398378;
`;

export const SignInButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomError = styled.div`
  color: red;
  font-size: 12px;
`;

export const CustomSignInButton = styled(Button)`
  display: inline-block;
  width: 100%;
  height: 3.125rem;
  border: 1px solid #374151;
  border-radius: 1.5rem;
  background-color: #374151;
  color: #fff;
  font: 700 0.875rem/0 "Open Sans", sans-serif;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: white; // Màu nền khi hover
    color: #2b3848; // Màu chữ khi hover
  }
`;

export const SignUp = styled.a`
  color: #555;
  text-decoration: underline;
`;
export const Text = styled.div`
  color: #374151;
  padding-top: 10px;
`;

export const BirdDecor = styled.img`
  position: absolute;
  top: 80px;
`;
