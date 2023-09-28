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
import { primaryColor } from "../../color"


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

  const logoDiv = {
    width: '100px',
    height: 'auto',
    padding: '10px',
    fill: 'white',

  }

  return (
    <CustomContainer maxwidth="xl" style={{ backgroundColor: primaryColor }}>
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
        {/* LOGO */}
        <Link to="/Index" sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg"
            version="1.1" width="846.89972"
            height="188.30623"
            viewBox="0 0 846.89972 188.30623"
            id="svg45"
            style={logoDiv}
          >
            <defs id="defs49" />
            <path d="m 72.360497,185.91726 c -13.79934,-4.08629 -24.61373,-10.81206 -33.86288,-21.06021 -20.04922,-22.21476 -24.4915,-53.47481 -11.39744,-80.202681 l 3.53844,-7.22275 -3.05218,-6.15175 c -3.50172,-7.05774 -7.22192,-19.66565 -7.22192,-24.47532 0,-1.80215 -0.49256,-3.58106 -1.09461,-3.95314 -0.60204,-0.37207 -5.18404,-0.97316 -10.1822454,-1.33573 L 1.5844727e-6,40.856439 6.5464916,35.244159 c 3.6005404,-3.08675 6.5653004,-6.07146 6.5883304,-6.63269 0.0231,-0.56122 -2.23207,-4.66748 -5.0114004,-9.12501 -2.77932,-4.45753 -4.92594,-8.23195 -4.7703,-8.3876 0.15567,-0.15566 5.38348,1.09172 11.6173954,2.77194 l 11.33435,3.05496 5.44824,-5.44127 c 2.99653,-2.9926902 8.20335,-6.7920102 11.57072,-8.4429302 5.65001,-2.77003003 6.99034,-3.00167003 17.3685,-3.00167003 18.95342,0 13.80735,-4.11373997 89.091063,71.21908023 l 64.62257,64.664761 -2.70435,1.77195 c -21.14542,13.85501 -71.09772,-0.21304 -106.47629,-29.98687 -6.658633,-5.60376 -9.778303,-7.26626 -7.884213,-4.20153 1.50436,2.43411 21.273793,18.17709 31.089803,24.75774 37.25323,24.97456 75.63515,33.45698 92.81355,20.51186 l 3.42984,-2.58464 21.05701,21.057 21.05698,21.05699 -93.36478,-0.0547 -93.364783,-0.0547 z M 63.073907,36.851309 c 2.96927,-1.53547 5.25006,-5.40193 5.25006,-8.90009 0,-2.76073 -6.34148,-9.03368 -9.13236,-9.03368 -3.03921,0 -7.94315,2.68805 -9.20485,5.04555 -1.9893,3.71706 -1.2267,8.20078 1.93209,11.35956 3.31703,3.31705 6.77924,3.79149 11.15506,1.52866 z M 342.27128,161.37564 c -16.02985,-3.0641 -28.35916,-12.37744 -35.12961,-26.53626 -5.83581,-12.20427 -6.67643,-17.43816 -6.65419,-41.431631 0.0218,-23.5021 0.92911,-28.77527 7.13655,-41.47437 8.73705,-17.87424 28.52933,-28.07523 51.32737,-26.45426 23.82672,1.69412 39.93384,14.43359 45.52374,36.00574 0.88319,3.4083 1.6058,8.54136 1.6058,11.4068 v 5.20988 h -9.06617 -9.06613 l -0.73085,-5.84944 c -1.64709,-13.18277 -7.04279,-21.7823 -16.61706,-26.48384 -5.09508,-2.50197 -7.02699,-2.87099 -15.03027,-2.87099 -11.24906,0 -17.95814,2.11675 -24.24283,7.64876 -5.15099,4.53408 -9.39312,12.99908 -11.08159,22.1128 -1.76178,9.50953 -0.6242,43.507571 1.66732,49.830711 3.6994,10.20787 9.03119,16.2644 17.84068,20.26563 6.90884,3.13798 23.06159,3.04199 30.10221,-0.17888 9.8805,-4.52004 15.86929,-12.8664 17.80885,-24.81953 0.57935,-3.57047 1.05685,-6.83616 1.0611,-7.25708 0.004,-0.42092 3.91079,-0.76531 8.68122,-0.76531 h 8.67352 v 5.39789 c 0,15.39996 -8.57929,31.29143 -21.25171,39.36468 -10.80087,6.88094 -28.0017,9.66114 -42.55795,6.8787 z m 105.64662,0.005 c -3.08675,-0.68446 -7.03647,-2.00008 -8.77715,-2.9236 -10.53466,-5.5892 -15.30761,-20.98144 -11.01646,-35.52694 2.10235,-7.12622 8.17113,-13.15682 16.3013,-16.1987 7.41628,-2.77479 22.93225,-5.14624 33.72207,-5.15407 4.55997,-0.003 9.72581,-0.29301 11.47965,-0.64378 l 3.18879,-0.63776 v -7.116231 c 0,-8.98623 -1.84312,-12.99692 -7.41072,-16.1261 -5.15963,-2.89988 -18.10087,-3.94465 -25.18089,-2.0329 -6.10155,1.64753 -11.02138,6.67809 -11.89906,12.16686 l -0.68043,4.25522 -8.79217,-0.29285 c -8.6871,-0.28934 -8.79594,-0.32545 -9.10757,-3.0212 -0.96229,-8.32496 5.79973,-17.96811 16.26779,-23.19905 8.64165,-4.31829 15.68979,-5.49549 29.92214,-4.99771 10.80355,0.37787 13.06776,0.7823 18.73121,3.34574 3.9511,1.78839 7.77675,4.47509 9.89363,6.9482 6.22697,7.27478 6.62352,9.88381 6.62352,43.577241 0,33.88731 0.0467,34.13091 6.49844,33.88837 2.0488,-0.077 4.63911,-0.62921 5.75623,-1.22707 1.93233,-1.03415 2.03112,-0.76012 2.03112,5.63364 v 6.72065 l -3.59222,1.50092 c -13.01097,5.43635 -24.24902,1.14948 -27.14591,-10.35509 l -1.13181,-4.49477 -4.72842,5.03324 c -9.50834,10.12131 -25.36738,14.3337 -40.95308,10.87773 z m 28.86511,-16.20326 c 9.32831,-3.92099 16.03309,-14.60253 16.03309,-25.54275 v -5.04264 l -11.98986,0.71139 c -14.03831,0.83293 -24.68118,2.80289 -29.18575,5.40218 -6.48018,3.73927 -9.07282,15.43588 -4.66389,21.04093 2.81296,3.57608 5.36806,4.8409 11.58328,5.73394 6.64989,0.95549 12.11356,0.26498 18.22313,-2.30305 z m 198.07675,16.10269 c -13.16818,-2.86488 -23.27646,-10.97241 -29.04241,-23.29393 -4.16661,-8.90386 -5.3386,-16.48556 -4.76148,-30.80257 0.75638,-18.764181 6.11065,-30.818381 17.51901,-39.440831 8.00228,-6.04811 16.65199,-8.31742 29.86318,-7.83478 9.20594,0.3363 11.96151,0.84209 16.80284,3.08415 15.73824,7.28853 23.26809,21.49668 23.28489,43.936361 l 0.006,7.90821 H 693.83757 659.1435 v 3.97416 c 0,7.41491 3.81627,17.24286 8.52335,21.94994 9.78096,9.78095 29.35268,9.56456 37.75196,-0.4174 2.40124,-2.85373 5.76579,-11.59367 5.76579,-14.97756 0,-1.00884 2.18544,-1.34542 8.73604,-1.34542 h 8.73605 l -0.70589,4.84697 c -2.49119,17.10592 -13.5705,28.78352 -30.76588,32.42723 -8.38737,1.77727 -14.10645,1.77356 -22.32522,-0.0145 z m 35.29879,-64.045531 c -0.0167,-9.74209 -7.40222,-19.78699 -16.32274,-22.20027 -11.01047,-2.97867 -23.47722,0.90665 -28.8215,8.9824 -2.26192,3.41801 -5.87076,13.0684 -5.87076,15.69901 0,0.459371 11.47966,0.835211 25.51035,0.835211 h 25.51034 l -0.006,-3.316351 z m 60.72031,64.524741 c -11.30095,-2.25162 -18.4131,-8.03455 -21.05294,-17.11821 -0.76789,-2.64235 -1.35718,-8.29097 -1.30951,-12.55251 0.14677,-13.12338 5.41274,-20.70478 17.62877,-25.38 7.17252,-2.74501 22.55257,-5.11976 33.30526,-5.14247 4.48983,-0.009 9.94232,-0.31113 12.11665,-0.67032 l 3.95333,-0.65306 -0.69811,-7.754121 c -0.38395,-4.26476 -1.47418,-9.08689 -2.42271,-10.71584 -2.55507,-4.38789 -8.41376,-6.97685 -17.04123,-7.53053 -14.57451,-0.93533 -23.93795,3.76806 -25.45847,12.78818 l -0.73106,4.33676 h -8.70269 -8.7027 l 0.41455,-6.5102 c 0.47151,-7.40513 3.15988,-11.86725 10.23982,-16.99592 8.56266,-6.20277 14.03975,-7.54647 30.91014,-7.58318 12.39585,-0.0269 16.35126,0.33059 20.80228,1.88055 6.95353,2.42139 13.02667,7.8639 16.08278,14.41275 2.32617,4.98472 2.38115,5.80185 2.39091,35.526461 0.006,18.76615 0.40994,31.17176 1.05376,32.37475 1.82968,3.41878 4.55628,4.2079 9.11381,2.6377 l 4.12819,-1.42227 v 6.48713 c 0,6.09659 -0.1747,6.57747 -2.90167,7.98764 -4.26911,2.20766 -12.34417,3.00324 -17.2029,1.69493 -5.10096,-1.37355 -9.14002,-5.80894 -10.09107,-11.08128 -0.37665,-2.08808 -0.85941,-4.10564 -1.07279,-4.48347 -0.21341,-0.37783 -2.79341,1.70623 -5.73337,4.63126 -2.93996,2.92502 -7.43667,6.29377 -9.99267,7.48612 -8.30444,3.87392 -19.75906,5.19559 -29.02636,3.34915 z m 26.72424,-15.85832 c 5.03704,-2.03766 12.11313,-9.17246 14.38664,-14.50598 1.13087,-2.65295 2.21607,-7.34907 2.41152,-10.43582 l 0.35539,-5.61228 -11.73476,0.28463 c -21.8833,0.53079 -31.46408,3.51398 -34.78739,10.83187 -3.37675,7.43559 -1.95696,14.69817 3.58303,18.32811 5.30682,3.47716 18.52668,4.04597 25.78557,1.10947 z m -227.25699,12.55841 c -0.54895,-1.26277 -9.00351,-23.4185 -18.78792,-49.23497 l -17.78977,-46.939031 9.28566,-0.29565 c 6.08374,-0.19369 9.53064,0.10072 9.99609,0.85385 0.39074,0.63222 6.85771,17.63435 14.37107,37.782511 7.51335,20.14817 13.89025,36.63251 14.17086,36.63186 0.28062,-5.3e-4 5.76654,-14.11462 12.19097,-31.36438 6.42441,-17.249781 12.78286,-34.233141 14.12989,-37.740811 l 2.44913,-6.37759 h 8.57432 c 4.71587,0 8.57431,0.32688 8.57431,0.7264 0,0.39952 -8.33566,22.67005 -18.52369,49.490071 l -18.52368,48.76367 h -9.55957 c -8.93763,0 -9.62453,-0.14938 -10.55767,-2.29593 z" id="path1006" />
          </svg>
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
              <Typography textAlign="center">TRANG CHỦ</Typography>
            </MenuItem>
          </Link>

          <MenuItem key="Product" onClick={handleOpenProductMenu} sx={{ p: 0 }}>
            <Typography textAlign="center">SẢM PHẨM</Typography>
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
              <Typography textAlign="center">DỊCH VỤ</Typography>
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
              <Typography textAlign="center">BLOG</Typography>
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
            <Buttons>Đăng nhập</Buttons>
          </a>
        )}
        {signUp && (
          <a href="/sign-up">
            <Buttons>Đăng ký</Buttons>
          </a>
        )}
      </Toolbar>
    </CustomContainer>
  );
}

export default Navbar;
