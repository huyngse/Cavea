import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { StyleSelectBox } from "./style_component.jsx";

export default function BirdCageDesign(props) {
  const { labelId, id, label, options, sx, value, onChange } = props;

  return (
    <FormControl>
      <InputLabel id={labelId}>{label}</InputLabel>
      <StyleSelectBox
        sx={sx}
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyleSelectBox>
    </FormControl>
  );
}
