import styled from "@emotion/styled";

import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";
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
  padding: 0 30px;
  z-index: 1000;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.5);

`;

export const BoxStyle = styled(Box)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
