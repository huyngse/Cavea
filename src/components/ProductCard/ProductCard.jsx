import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../../contexts/CardContext.jsx";
import Rating from "@mui/material/Rating";
import { CartButton } from "./style_component.jsx";
import "./ProductCard.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const { compareProducts } = useCart();
  const {
    cageid,
    userid,
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

  const isChecked = compareProducts.includes(cageid);

  const navigate = useNavigate();

  const handleCompareProducts = async (productId) => {
    setIsComparing(!isComparing);
    await onCompare(productId);
  };

  const handleAddToCart = async (productId, userid) => {
    const loginUser = Cookies.get("loggedInUser");
    console.log("User: ", loginUser);
    if (loginUser === undefined) {
      navigate("/login");
    } else {
      await onAddToCart(productId, userid);
    }
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
    <div className="bg-white text-center shadow mb-4">
      <form className="compare-div">
        So sánh
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={isChecked}
            onChange={() => handleCompareProducts(cageid)}
          />
        </label>
      </form>
      <a className="product-card-image" href={`/product-detail/${cageid}`}>
        <img sx={{ height: 260 }} src={productImage} alt="" />
      </a>
      <CardContent sx={{ padding: "6px" }}>
        <Rating name="read-only" value={rating} readOnly precision={0.5} />
        <div className="product-name text-dark">{productName}</div>
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
        onClick={() => handleAddToCart(cageid, userid)}
      >
        Thêm vào giỏ
      </CartButton>
    </div>
  );
}
