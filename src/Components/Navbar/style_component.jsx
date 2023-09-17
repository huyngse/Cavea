import styled from "@emotion/styled";

import AppBar from "@mui/material/AppBar";

export const LogoHeader = styled.img`
  width: 100px;
  height: auto;
`;

export const CustomContainer = styled(AppBar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #398378;
  z-index: 1000;
`;
