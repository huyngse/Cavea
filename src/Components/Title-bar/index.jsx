import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { primaryColor } from "../../color";

export default function TitleBar(props) {
  const colorDiv = {
    backgroundColor: primaryColor,
  };
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
    },
  });
  const { label } = props;
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary" style={colorDiv}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
