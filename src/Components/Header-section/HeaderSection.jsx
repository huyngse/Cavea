import React from "react";
import Box from "@mui/material/Box";
import Menu from "../Header-menu/HeaderMenu.jsx";
import Grid from "@mui/material/Grid";
import "./HeaderSection.css";
import HeaderCarousel from "./HeaderCarousel.jsx";

function HeaderSection({ signUp, Order }) {
  return (
    <section className="header-section">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Menu />
          </Grid>
          <Grid item xs={9}>
            <HeaderCarousel/>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
export default HeaderSection;
