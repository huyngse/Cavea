import styled from "@emotion/styled";
import {
  Card,
  CardHeader,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

export const StyledCard = styled(Card)`
  margin-top: 2rem;
`;

export const StyledCardHeader = styled(CardHeader)`
  background-color: #2196f3;
  color: #ffffff;
`;

export const StyledListItem = styled(ListItem)`
  border-bottom: 1px solid #e0e0e0;
`;

export const StyledListItemText = styled(ListItemText)`
  display: flex;
  flex-direction: column;
`;

export const StyledIconButton = styled(IconButton)`
  margin-left: auto;
  margin-top: -8px;
`;

export const StyledClearButton = styled(IconButton)`
  margin-top: 16px;
  margin-left: auto;
`;

export const StyledProductCount = styled.span`
  margin-left: 8px;
`;

export const StyledProductActions = styled.div`
  display: flex;
`;

export const StyledTotalPrice = styled.div`
  font-weight: bold;
  margin-top: 8px;
  text-align: right;
`;

export const StyledEmptyCartMessage = styled.p`
  text-align: center;
  margin-top: 1rem;
`;
