import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const CustomInput = styled(TextField)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 1px;
  background: #ffffff;
  border-color: #398378;
`;

export const LoginInput = styled(CustomInput)({
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