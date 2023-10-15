import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../../contexts/CardContext.jsx";
import Rating from "@mui/material/Rating";
import { CartButton } from "./style_component.jsx";
import "./ProductCard.css";
export default function ProductCard(props) {
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
    onAddToCart,
  } = props;

  const modelDiv = {
    backgroundColor: "darkOrange",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    padding: "4px 6px",
    borderRadius: "20px",
    fontSize: "10px",
    fontWeight: "bold",
  };

  const [isComparing, setIsComparing] = useState(false);

  const isChecked = compareProducts.includes(id);

  const handleCompareProducts = async (productId) => {
    setIsComparing(!isComparing);
    await onCompare(productId);
  };

  const handleAddToCart = async (productId) => {
    await onAddToCart(productId);
  };

  const price = productPrice.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const discount = productDiscount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="bg-white text-center shadow">
      <form className="compare-div">
        So sánh
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={isChecked}
            onChange={() => handleCompareProducts(id)}
          />
        </label>
      </form>
      <a className="product-card-image" href={`/product-detail/${id}`}>
        <img sx={{ height: 260 }} src={productImage} alt="" />
      </a>
      <CardContent sx={{ padding: "6px" }}>
        <Rating name="read-only" value={rating} readOnly precision={0.5} />
        <a className="text-decoration-none" href={`/product-detail/${id}`}>
          <div className="product-name text-dark">{productName}</div>
        </a>
        <Typography variant="body2" color="text.secondary" style={modelDiv}>
          {productDescription}
        </Typography>
        <p className="discount">{discount}</p>
        <p variant="body2" color="text.secondary" className="price">
          {price}
        </p>
      </CardContent>
      <CartButton
        variant="contained"
        startIcon={<AddShoppingCartIcon />}
        onClick={() => handleAddToCart(id)}
      >
        Thêm vào giỏ
      </CartButton>
    </div>
  );
}
