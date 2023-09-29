import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

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

  const [isComparing, setIsComparing] = useState(false);

  const handleCompare = async (productId) => {
    setIsComparing(!isComparing);
    await onCompare(productId);
  };

  return (
    <CustomCard>
      <form className="compare-div">
        So sánh
        <label className="form-control">
          <input
            type="checkbox"
            name="checkbox"
            onChange={() => handleCompare(id)}
          />
        </label>
      </form>

      <CardMedia sx={{ height: 260 }} image={productImage} />
      <CardContent sx={{ padding: "6px" }}>
        <BasicRating value={rating}></BasicRating>
        <div className="product-name">{productName}</div>
        <Typography variant="body2" color="text.secondary" style={modelDiv}>
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
