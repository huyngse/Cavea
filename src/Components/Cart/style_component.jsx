import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import {secondaryColor} from "../../color"

export const CustomCard = styled(Card)`
  max-width: 17rem;
  height: 500px;
  margin: 0.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 0;
`;

export const CartButton = styled(Button)`
<<<<<<< HEAD
  background-color:  #24688A;
=======
  background-color: #398378;
>>>>>>> efb54ae (feat/project-11: format style file)
  width: 100%;
  padding: 8px;
  margin-top: auto;
  border-radius: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  text-transform: none;
  &:hover {
    background-color: #c70f02;
  }
`;
