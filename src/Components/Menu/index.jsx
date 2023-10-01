import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-scroll";

import { CustomTitleMenu, CustomMenuList } from "./style_component";

export default function Menu() {
  return (
    <CustomMenuList>
      {/* <CustomTitleMenu>
        <ListItemText primary="Danh sách sản phẩm" />
      </CustomTitleMenu> */}
      <Divider />
      <Link to="cu-gay" spy={true} smooth={true} offset={-60} duration={500}>
        <ListItem button divider>
          <ListItemText primary="Lồng chim cu gáy" />
        </ListItem>
      </Link>
      <Link to="hoa-mi" spy={true} smooth={true} offset={-60} duration={500}>
        <ListItem button divider>
          <ListItemText primary="Lồng chim họa mi" />
        </ListItem>
      </Link>
      <Link to="chao-mao" spy={true} smooth={true} offset={-60} duration={500}>
        <ListItem button divider>
          <ListItemText primary="Lồng chim chào mào" />
        </ListItem>
      </Link>
      <Link to="khuyen" spy={true} smooth={true} offset={-60} duration={500}>
        <ListItem button divider>
          <ListItemText primary="Lồng chim khuyên" />
        </ListItem>
      </Link>
      <Divider light />
      <Link to="choe-than" spy={true} smooth={true} offset={-60} duration={500}>
        <ListItem button>
          <ListItemText primary="Lồng chim chòe than" />
        </ListItem>
      </Link>
    </CustomMenuList>
  );
}
