import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import BasicRating from "../Rating/index.jsx";
import { CustomCard, CustomPrice, CartButton } from "./style_component.jsx";

import "./product_cart.css"

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
    <CustomCard >
      <form className="compare-div">
        So sánh
        <label className="form-control">
          <input type="checkbox" name="checkbox" />
          <span>
            .

          </span>
        </label>

      </form>


      <CardMedia sx={{ height: 260 }} image={productImage} />
      <CardContent sx={{ padding: "6px" }}>
        <BasicRating value={rating}></BasicRating>
        <div className="product-name">
          {productName}
        </div>
        <Typography variant="body2" color="text.secondary">
          {productDescription}
        </Typography>
        <CustomPrice>
          <Typography variant="body2" color="text.secondary" className="price">
            {productPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="discount">
            {productDiscount}
          </Typography>
        </CustomPrice>
      </CardContent>
      <CartButton variant="contained" startIcon={<AddShoppingCartIcon />}>
        Thêm vào giỏ
      </CartButton>
    </CustomCard>
  );
}
