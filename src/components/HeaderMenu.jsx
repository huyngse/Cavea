import * as React from "react";
import ListItemText from "@mui/material/ListItemText";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import chimCuGay from "../assets/Bird-photos/chim-cu-gay.jpg";
import chimHoaMi from "../assets/Bird-photos/chim-hoa-mi.jpg";
import chimChaoMao from "../assets/Bird-photos/chim-chao-mao.jpg";
import chimKhuyen from "../assets/Bird-photos/chim-khuyen.jpg";
import chimChoeThan from "../assets/Bird-photos/chim-choe-than.jpg";
import chimKhuou from "../assets/Bird-photos/chim-khuou.jpg";
import chimHutMat from "../assets/Bird-photos/chim-hut-mat.jpg";
import chimChoeLua from "../assets/Bird-photos/chim-chich-choe-lua.jpg";

export default function HeaderMenu() {
  const menuItems = [
    {
      text: "Lồng Chim Cu Gáy",
      image: chimCuGay,
      href: "http://localhost:3000/Cavea?cagetype=1",
    },
    {
      text: "Lồng Chim Chào Mào",
      image: chimChaoMao,
      href: "http://localhost:3000/Cavea?cagetype=2",
    },
    {
      text: "Lồng Chim Khuyên",
      image: chimKhuyen,
      href: "http://localhost:3000/Cavea?cagetype=3",
    },
    {
      text: "Lồng Chim Họa Mi",
      image: chimHoaMi,
      href: "http://localhost:3000/Cavea?cagetype=4",
    },

    {
      text: "Lồng Chim Chòe Than",
      image: chimChoeThan,
      href: "http://localhost:3000/Cavea?cagetype=5",
    },
  ];
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {menuItems.map((item, index) => (
        <a
          href={item.href}
          key={index}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src={item.image}></Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </a>
      ))}
    </List>
  );
}
