import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../../CardContext.jsx";

import BasicRating from "../Rating/index.jsx";
import { CustomCard, CartButton } from "./style_component.jsx";
import "./product_cart.css";

export default function MediaCard(props) {
  const { compareProducts } = useCart();
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
  const isChecked = compareProducts.includes(id);
  const [isComparing, setIsComparing] = useState(false);
  const handleCompareProducts = async (productId) => {
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
            checked={isChecked}
            onChange={() => handleCompareProducts(id)}
          />
          <span>.</span>
        </label>
      </form>
      <a className="product-card-image" href={`/product-detail/${id}`}>
        <img sx={{ height: 260 }} src={productImage} alt="" />
      </a>
      <CardContent sx={{ padding: "6px" }}>
        <BasicRating value={rating}></BasicRating>
        <div className="product-name">{productName}</div>
        <Typography variant="body2" color="text.secondary" style={modelDiv}>
          {productDescription}
        </Typography>
        <p className="discount">{productDiscount}</p>
        <p variant="body2" color="text.secondary" className="price">
          {productPrice}
        </p>
        
      </CardContent>
      <CartButton variant="contained" startIcon={<AddShoppingCartIcon />}>
        Thêm vào giỏ
      </CartButton>
    </CustomCard>
  );
}
