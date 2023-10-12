import React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import { StyledModal, StyledBackdrop, style } from "./style_component.jsx";
import Cookies from "js-cookie";

export default function Profile() {
  const loggedInUser = Cookies.get("loggedInUser");
  const role = Cookies.get("userRole");
  const email = Cookies.get("email");
  const phone = Cookies.get("phone");
  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");

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
              <p id="unstyled-modal-description">Role: {role}</p>
              <p id="unstyled-modal-description">Email: {email}</p>
              <p id="unstyled-modal-description">FirstName: {firstName}</p>
              <p id="unstyled-modal-description">LastName: {lastName}</p>
              <p id="unstyled-modal-description">Phone: {phone}</p>
            </>
          ) : (
            <></>
          )}
        </Box>
      </StyledModal>
    </>
  );
}
