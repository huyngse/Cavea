import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import BasicRating from "../Rating/index.jsx";
import { CustomCard, CartButton } from "./style_component.jsx";
import "./product_cart.css";

export default function MediaCard(props) {
  const {
    id,
    productName,
    productDescription,
    productImage,
    rating,
    productPrice,
    productDiscount,
    onCompare,
  } = props;

  const modelDiv = {
    backgroundColor: "darkOrange",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    padding: "2px 4px",
    borderRadius: "10px",
  };

  return (
    <CustomCard>
      <CardMedia sx={{ height: 260 }} image={productImage} />
      <CardContent sx={{ padding: "6px" }}>
        <BasicRating value={rating}></BasicRating>
        <div className="product-name">{productName}</div>
        <Typography variant="body2" color="text.secondary">
          {productDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="price">
          {productPrice}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="discount">
          {productDiscount}
        </Typography>
      </CardContent>
      <CartButton variant="contained" startIcon={<AddShoppingCartIcon />}>
        Thêm vào giỏ
      </CartButton>
    </CustomCard>
  );
}
