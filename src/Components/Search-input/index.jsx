import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { CustomTextField } from "./style_component";

function SearchInput({ handleChange, handleClear, defaultValue }) {
  const [value, setValue] = useState(defaultValue || "");

  const handleChangeInput = (event) => {
    handleChange(event);
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    handleClear(event);
    setValue("");
  };

  const CssTextField = styled(CustomTextField)({
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
        borderColor: "black",
      },
    },
  });

  return (
    <CssTextField
      aria-label="search-field"
      size="small"
      variant="outlined"
      onChange={handleChangeInput}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            aria-label="clear-btn"
            position="end"
            style={{ display: value ? "flex" : "none", cursor: "pointer" }}
            onClick={handleClick}
          >
            <Clear />
          </InputAdornment>
        ),
      }}
    />
  );
}
export default SearchInput;
