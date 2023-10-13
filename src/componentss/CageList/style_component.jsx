import styled from "@emotion/styled";

import Button from "@mui/material/Button";

export const CartButton = styled(Button)`
  background-color: #398378;
  width: 100%;
  padding: 8px;
  margin-top: auto;
  border-radius: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  text-transform: none;
  &:hover {
    background-color: #84b213;
  }
`;
