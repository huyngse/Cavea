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
          <div> Xứ sở lồng chim: </div>
          <div> Nơi những chú chim cất cánh!</div>
          <CustomSlogan>
            Mọi chú chim đều xứng đáng để có một mái nhà
          </CustomSlogan>
          {signUp && (
            <a href="/sign-up">
              <CustomButtonForHomePage>Đăng ký</CustomButtonForHomePage>
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
