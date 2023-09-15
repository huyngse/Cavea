import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { CustomTitleMenu, CustomMenuList } from "./style_component";

export default function Menu() {
  return (
    <CustomMenuList component="nav" aria-label="mailbox folders">
      <CustomTitleMenu>
        <ListItemText primary="Danh sách sản phẩm" />
      </CustomTitleMenu>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Phụ kiện lồng chim" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Lồng chim cu gáy" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Lồng chim họa mi" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Lồng chim chào mào" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Lồng chim cu gáy" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Lồng chim khuyên" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Lồng chim chòe than" />
      </ListItem>
    </CustomMenuList>
  );
}
