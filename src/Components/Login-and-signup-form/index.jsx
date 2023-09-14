import styled from "@emotion/styled";
import { Button } from "reactstrap";
import TextField from "@mui/material/TextField";

export const CustomLoginAndSignUpButton = styled(Button)`
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
    background-color: white;
    color: #2b3848;
  }
`;
export const CustomTitle = styled.div`
  color: #374151;
  font: 700 3rem/5.125rem "Open Sans", sans-serif;
  letter-spacing: -0.2px;
`;

export const CustomInput = styled(TextField)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px;
  background: #ffffff;
  border-color: #398378;
`;

export const LoginAndSignUpButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomError = styled.div`
  color: red;
  font-size: 12px;
`;

export const Text = styled.div`
  color: #374151;
  padding-top: 10px;
`;
