import styled from "@emotion/styled";

import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

export const CustomRow = styled(TableRow)`
  display: inline-box;
`;

export const CartButton = styled(Button)`
  background-color: #24688a;
  width: 100%;
  padding: 8px;
  margin-top: auto;
  border-radius: 0;
  bottom: 0;
  left: 0;
  text-transform: none;
  &:hover {
    background-color: #c70f02;
  }
`;
