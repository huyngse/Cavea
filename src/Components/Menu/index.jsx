import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-scroll";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DraftsIcon from '@mui/icons-material/Drafts';
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

import { CustomTitleMenu, CustomMenuList } from "./style_component";

export default function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
      <Link > 
      <ListItemButton >
        <ListItemAvatar>
          <Avatar src={chimCuGay}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lồng Chim Cu Gáy" />
      </ListItemButton>
      </Link>
     
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={chimHoaMi}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lồng Chim Họa Mi" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={chimChaoMao}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lồng Chim Chào Mào" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={chimKhuyen}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lồng Chim Khuyên" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={chimChoeThan}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lồng Chim Chòe Than" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={chimKhuou}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lồng Chim Khướu" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={chimHutMat}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lồng Chim Hút Mật" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={chimChoeLua}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lồng Chim Chòe Lửa" />
      </ListItemButton>
    </List>
  );

}
