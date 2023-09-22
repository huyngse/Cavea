import React from "react";

import {
  CustomBackGround,
  CustomLeadText,
  CustomSlogan,
} from "./style_component";
import { CustomButtonForHomePage } from "../Button/style_component";

import Box from "@mui/material/Box";
import Menu from "../Menu/index.jsx";

function Header({ signUp, Order }) {
  return (
    <CustomBackGround>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Menu />
        <CustomLeadText>
          <div> Home Sweet Cage: </div>
          <div> Where Birds Soar in Style!</div>
          <CustomSlogan>
            Every bird deserves a beautiful home to return to
          </CustomSlogan>
          {signUp && (
            <a href="/sign-up">
              <CustomButtonForHomePage>Sign up</CustomButtonForHomePage>
            </a>
          )}
          {Order && (
            <CustomButtonForHomePage>Order now</CustomButtonForHomePage>
          )}
        </CustomLeadText>
      </Box>
    </CustomBackGround>
  );
}
export default Header;
