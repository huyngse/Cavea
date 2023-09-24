import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Buttons from "../Button/button.jsx";
import small_logo from "../../images/small-logo.png";
import { LogoHeader, CustomContainer, BoxStyle } from "./style_component.jsx";
import { Link } from "react-router-dom";
import pro_avatar from "../../images/pro_avatar.png";

const settings = ["Profile", "Logout"];

function Navbar({ isSearchVisible, login, signUp, avatar }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElService, setAnchorElService] = React.useState(null);
  const [anchorElProduct, setAnchorElProduct] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenServiceMenu = (event) => {
    setAnchorElService(event.currentTarget);
  };

  const handleCloseServiceMenu = () => {
    setAnchorElService(null);
  };

  const handleOpenProductMenu = (event) => {
    setAnchorElProduct(event.currentTarget);
  };

  const handleCloseProductMenu = () => {
    setAnchorElProduct(null);
  };

  // const [searchValue, setSearchValue] = useState("");

  // const handleSearchChange = (event) => {
  //   setSearchValue(event.target.value);
  // };

  // const handleClearSearch = () => {
  //   setSearchValue("");
  // };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <CustomContainer maxWidth="xl" style={{ backgroundColor: "#398378" }}>
      <Toolbar disableGutters>
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
            <Link
              to="/Index"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem key="Index">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Link>

            <Link
              to="/blog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem key="Blog">
                <Typography textAlign="center">Blog</Typography>
              </MenuItem>
            </Link>

            <MenuItem
              key="Product"
              onClick={handleOpenProductMenu}
              sx={{ p: 0 }}
            >
              <Typography textAlign="center">Product</Typography>
            </MenuItem>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar-product"
              anchorEl={anchorElProduct}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElProduct)}
              onClose={handleCloseProductMenu}
            >
              <MenuItem key="Product" onClick={handleCloseProductMenu}>
                <Typography textAlign="center">Phụ kiện lồng chim</Typography>
              </MenuItem>
            </Menu>

            <MenuItem
              key="Service"
              onClick={handleOpenServiceMenu}
              sx={{ p: 0 }}
            >
              <Typography textAlign="center">Service</Typography>
            </MenuItem>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar-service"
              anchorEl={anchorElService}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElService)}
              onClose={handleCloseServiceMenu}
            >
              <MenuItem key="DesignCage" onClick={handleCloseServiceMenu}>
                <Link
                  to="/service"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography textAlign="center">
                    Đặt lồng chim theo yêu cầu
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Menu>
        </Box>

        <Link to="/Index" sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <LogoHeader src={small_logo} />
        </Link>

        <BoxStyle
          sx={{
            flexGrow: 0,
            display: { xs: "none", md: "flex" },
            paddingLeft: "20px",
          }}
        >
          <Link
            to="/Index"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem key="Index">
              <Typography textAlign="center">Home</Typography>
            </MenuItem>
          </Link>

          <MenuItem key="Product" onClick={handleOpenProductMenu} sx={{ p: 0 }}>
            <Typography textAlign="center">Product</Typography>
          </MenuItem>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar-product"
            anchorEl={anchorElProduct}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElProduct)}
            onClose={handleCloseProductMenu}
          >
            <MenuItem key="Product" onClick={handleCloseProductMenu}>
              <Typography textAlign="center">Phụ kiện lồng chim</Typography>
            </MenuItem>
          </Menu>

          <Box sx={{ flexGrow: 0, paddingLeft: "20px" }}>
            <MenuItem
              key="Service"
              onClick={handleOpenServiceMenu}
              sx={{ p: 0 }}
            >
              <Typography textAlign="center">Service</Typography>
            </MenuItem>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar-service"
              anchorEl={anchorElService}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElService)}
              onClose={handleCloseServiceMenu}
            >
              <MenuItem key="DesignCage" onClick={handleCloseServiceMenu}>
                <Link
                  to="/service"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography textAlign="center">
                    Đặt lồng chim theo yêu cầu
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Link to="/blog" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem key="Blog">
              <Typography textAlign="center">Blog</Typography>
            </MenuItem>
          </Link>
        </BoxStyle>

        {avatar && (
          <Box sx={{ flexGrow: 0, padding: "20px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="pro_avatar" src={pro_avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
        {/* {isSearchVisible && (
          <SearchInput
            handleChange={handleSearchChange}
            handleClear={handleClearSearch}
            defaultValue={searchValue}
          />
        )} */}

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

export default Navbar;
