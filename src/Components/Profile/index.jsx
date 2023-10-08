import React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import { StyledModal, StyledBackdrop, style } from "./style_component.jsx";
import { useAuth } from "../../AuthContext.jsx";

export default function Profile() {
  const {
    loggedInUser,
    userRole,
    userEmail,
    userFirstName,
    userLastName,
    userPhone,
  } = useAuth();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MenuItem onClick={handleOpen}>
        <Typography textAlign="center">Hô Sơ</Typography>
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
          {loggedInUser ? (
            <>
              <p id="unstyled-modal-description">Username: {loggedInUser}</p>
              <p id="unstyled-modal-description">Role: {userRole}</p>
              <p id="unstyled-modal-description">Email: {userEmail}</p>
              <p id="unstyled-modal-description">FirstName: {userFirstName}</p>
              <p id="unstyled-modal-description">LastName: {userLastName}</p>
              <p id="unstyled-modal-description">Phone: {userPhone}</p>
            </>
          ) : (
            <></>
          )}
        </Box>
      </StyledModal>
    </>
  );
}
