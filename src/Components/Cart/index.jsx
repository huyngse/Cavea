import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import BasicRating from "../Rating/index.jsx";
import { CustomCard, CustomPrice, CartButton } from "./style_component.jsx";

export default function MediaCard(props) {
  const {
    productName,
    productDescription,
    productImage,
    rating,
    productPrice,
    productDiscount,
  } = props;

  return (
    <CustomCard>
      <CardMedia sx={{ height: 262 }} image={productImage} />
      <CardContent sx={{ padding: "6px" }}>
        <BasicRating value={rating}></BasicRating>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productDescription}
        </Typography>
        <CustomPrice>
          <Typography variant="body2" color="text.secondary">
            {productPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productDiscount}
          </Typography>
        </CustomPrice>
      </CardContent>
      <CartButton variant="contained" startIcon={<AddShoppingCartIcon />}>
        Add to Cart
      </CartButton>
    </CustomCard>
  );
}
