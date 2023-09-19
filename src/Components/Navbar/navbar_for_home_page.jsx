import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Buttons from "../Button/button.jsx";

import small_logo from "../../images/small-logo.png";
import { LogoHeader, CustomContainer } from "./style_component";
import SearchInput from "../Search-input/index.jsx";
import { Link } from "react-router-dom";

function NavbarForHomePage({ isSearchVisible, login, signUp }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  return (
    <CustomContainer maxWidth="xl" style={{ backgroundColor: "#398378" }}>
      <Toolbar disableGutters>
        <Link to="/Index">
          <LogoHeader src={small_logo} />
        </Link>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <a
              href="/blog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem key="Blog">
                <Typography textAlign="center">Blog</Typography>
              </MenuItem>
            </a>
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <a href="/blog" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem key="Blog">
              <Typography textAlign="center">Blog</Typography>
            </MenuItem>
          </a>
        </Box>

        {isSearchVisible && (
          <SearchInput
            handleChange={handleSearchChange}
            handleClear={handleClearSearch}
            defaultValue={searchValue}
          />
        )}
        {login && (
          <a href="/login">
            <Buttons>Login</Buttons>
          </a>
        )}
        {signUp && (
          <a href="/sign-up">
            <Buttons>Sign up</Buttons>
          </a>
        )}
      </Toolbar>
    </CustomContainer>
  );
}

export default NavbarForHomePage;
