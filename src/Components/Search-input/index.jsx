import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";

import { CustomTextField } from "./style-component";

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

  return (
    <CustomTextField
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
