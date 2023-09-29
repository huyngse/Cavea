import React from "react";
import { useCart } from "../../CardContext";
import { CardContent, List, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  StyledCard,
  StyledCardHeader,
  StyledListItem,
  StyledListItemText,
  StyledIconButton,
  StyledProductCount,
  StyledProductActions,
} from "./style_component";

export default function ViewCardForm() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <div style={{ paddingTop: "10rem" }}>
      <h2>Giỏ hàng</h2>
      {cart && cart.length > 0 ? (
        <StyledCard>
          <StyledCardHeader title="Sản phẩm trong giỏ" />
          <CardContent>
            <List>
              {cart.map((item) => (
                <StyledListItem key={item.id}>
                  <StyledListItemText
                    primary={item.name}
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {item.descriptions}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Giá: {item.price}
                        </Typography>
                        <StyledProductActions>
                          <StyledIconButton
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </StyledIconButton>
                          <StyledIconButton
                            aria-label="Xóa sản phẩm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <DeleteIcon />
                          </StyledIconButton>
                          <StyledProductCount>
                            {item.quantity}
                          </StyledProductCount>
                          <StyledIconButton
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </StyledIconButton>
                        </StyledProductActions>
                      </>
                    }
                  />
                </StyledListItem>
              ))}
            </List>
          </CardContent>
          <Typography
            variant="h6"
            color="text.secondary"
            style={{ padding: "1rem" }}
          >
            <p>Tổng giá trị đơn hàng: {totalPrice} vnđ</p>
          </Typography>
        </StyledCard>
      ) : (
        <p>Giỏ đang trống.</p>
      )}
    </div>
  );
}
