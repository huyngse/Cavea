import styled from "@emotion/styled";
import { Button } from "reactstrap";

export const CustomButton = styled(Button)`
  display: inline-block;
  padding: 0.875rem 1.5rem 0.875rem 1.5rem;
  border: 0.125rem solid #374151;
  border-radius: 2rem;
  background-color: white;
  color: #374151;
  font: 700 0.875rem/0 "Open Sans", sans-serif;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background-color: #374151;
    color: white;
  }
`;
