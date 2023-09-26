import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import { StyledModal, StyledBackdrop, style } from "./style_component.jsx";
import { useAuth } from "../../AuthContext.jsx";

export default function Profile() {
  const { loggedInUser } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MenuItem onClick={handleOpen}>
        <Typography textAlign="center">Profile</Typography>
      </MenuItem>

      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">User Profile</h2>
          <p id="unstyled-modal-description">Username: {loggedInUser}</p>
        </Box>
      </StyledModal>
    </>
  );
}
