import React from "react";
import { useParams } from "react-router-dom";
import { CardContent, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { products } from "../../Components/List-cart/list_product";
import BasicRating from "../../Components/Rating/index.jsx";
import { CustomCard, CartButton } from "../../Components/Cart/style_component";
import "./../../Components/Cart/product_cart.css";

const centerContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "5rem",
};

export default function ProductDetailForm() {
  const { productId } = useParams();

  const productInfo = products.find(
    (product) => product.id === parseInt(productId)
  );
  if (!productInfo) {
    return <div style={centerContentStyle}>Sản phẩm không tồn tại.</div>;
  }

  return (
    <div style={centerContentStyle}>
      <h2>Thông tin chi tiết sản phẩm</h2>
      <CustomCard>
        <CardContent>
          <img
            style={{ height: "260px" }}
            src={productInfo.image}
            alt={productInfo.name}
          />
          <Typography variant="h6" component="div">
            Tên sản phẩm: {productInfo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mô tả: {productInfo.descriptions}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Đánh giá: <BasicRating value={productInfo.rating} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Giá: {productInfo.discount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Giảm còn: {productInfo.price}
          </Typography>
        </CardContent>
        <CartButton variant="contained" startIcon={<AddShoppingCartIcon />}>
          Thêm vào giỏ
        </CartButton>
      </CustomCard>
    </div>
  );
}
