import styled from "@emotion/styled";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export const CustomCard = styled(Card)`
  max-width: 21rem;
  height: 27.6rem;
  margin: 0.5rem;
  text-align: center;
`;

export const CustomPrice = styled.div``;

export const CartButton = styled(Button)`
  background-color: black;
  padding: 0.5rem 5rem;
  &:hover {
    background-color: #84b213;
  }
`;
