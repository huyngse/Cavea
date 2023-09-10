import styled from "@emotion/styled";
import background from "../../images/background.png";

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
  margin-top: 80px;
  padding: 2.25rem 1.25rem 1.25rem 1.25rem;
  border-radius: 0.5rem;
  background-color: #f3f7fd;
  font-family: "Open Sans", sans-serif;
`;

export const Input = styled.input`
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-family: "Open Sans", sans-serif;
`;

export const CustomError = styled.div`
  color: red;
  font-size: 12px;
`;
