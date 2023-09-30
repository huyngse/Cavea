import React from "react";

import {
  CustomBackGround,
  CustomLeadText,
  CustomSlogan,
} from "./style_component";
import { CustomButtonForHomePage } from "../Button/style_component";

import Box from "@mui/material/Box";
import Menu from "../Menu/index.jsx";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Header({ signUp, Order }) {
  return (
    <CustomBackGround>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Menu />
          </Grid>
          <Grid item xs={9}>
            <div>
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
            </div>

          </Grid>
        </Grid>
      </Box>

    </CustomBackGround>
  );
}
export default Header;
