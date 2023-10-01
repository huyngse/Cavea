import * as React from "react";
import ListItemText from "@mui/material/ListItemText";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import chimCuGay from '../../images/Bird-photos/chim-cu-gay.jpg';
import chimHoaMi from '../../images/Bird-photos/chim-hoa-mi.jpg';
import chimChaoMao from '../../images/Bird-photos/chim-chao-mao.jpg';
import chimKhuyen from '../../images/Bird-photos/chim-khuyen.jpg';
import chimChoeThan from '../../images/Bird-photos/chim-choe-than.jpg';
import chimKhuou from '../../images/Bird-photos/chim-khuou.jpg';
import chimHutMat from '../../images/Bird-photos/chim-hut-mat.jpg';
import chimChoeLua from '../../images/Bird-photos/chim-chich-choe-lua.jpg';


export default function HeaderMenu() {
  const menuItems = [
    {
      text: "Lồng Chim Cu Gáy",
      image: chimCuGay,
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-cu-gay",
    },
    {
      text: "Lồng Chim Họa Mi",
      image: chimHoaMi,
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-hoa-mi",
    },
    {
      text: "Lồng Chim Chào Mào",
      image: chimChaoMao,
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-chao-mao",
    },
    {
      text: "Lồng Chim Khuyên",
      image: chimKhuyen,
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-khuyen",
    },
    {
      text: "Lồng Chim Chòe Than",
      image: chimChoeThan,
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-choe-than",
    },
    {
      text: "Lồng Chim Khướu",
      image: chimKhuou,
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-khuou",
    },
    {
      text: "Lồng Chim Hút Mật",
      image: chimChoeLua,
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-chim-yen-hut-mat",
    },
    {
      text: "Lồng Chim Chòe Lửa",
      image: chimHutMat,
      href: "https://www.sieuthilongchim.net/danh-sach-san-pham/long-choe-lua",
    },
  ]
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"

    >
      {menuItems.map((item, index) => (
        <a href={item.href} key={index} style={{ textDecoration: "none", color: "black"}}>
          <ListItemButton >
            <ListItemAvatar>
              <Avatar src={item.image}>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </a>
      )
      )}
    </List>
  );

}