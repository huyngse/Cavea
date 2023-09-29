import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { products } from "../../Components/List-cart/list_product";
import BasicRating from "../../Components/Rating/index.jsx";
import { CustomRow } from "./style_component";
import { CartButton } from "../../Components/Cart/style_component.jsx";

export default function CompareForm() {
  const location = useLocation();
  const { compareProducts } = location.state;

  const [compareProductDetails, setSelectedProductDetails] = useState([]);

  useEffect(() => {
    const productsDetails = products.filter((product) =>
      compareProducts.includes(product.id)
    );
    setSelectedProductDetails(productsDetails);
  }, [compareProducts]);

  return (
    <>
      <TableContainer
        style={{
          width: "70%",
          paddingTop: "5rem",
          marginLeft: "15rem",
          textAlign: "center",
        }}
        component={Paper}
      >
        <h2>Trang so sánh sản phẩm</h2>
        <Table>
          <TableBody>
            <CustomRow>
              <TableCell>Ảnh mô tả</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>
                  <img
                    style={{ height: "260px" }}
                    src={product.image}
                    alt={product.name}
                  />
                  <CartButton
                    variant="contained"
                    startIcon={<AddShoppingCartIcon />}
                  >
                    Thêm vào giỏ
                  </CartButton>
                </TableCell>
              ))}
            </CustomRow>

            <CustomRow>
              <TableCell>Tên</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.name}</TableCell>
              ))}
            </CustomRow>
            <CustomRow>
              <TableCell>Mô tả</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.descriptions}</TableCell>
              ))}
            </CustomRow>

            <CustomRow>
              <TableCell>Đánh giá</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>
                  <BasicRating value={product.rating} />
                </TableCell>
              ))}
            </CustomRow>

            <CustomRow>
              <TableCell>Giá</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.discount}</TableCell>
              ))}
            </CustomRow>

            <CustomRow>
              <TableCell>Giảm còn</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.price}</TableCell>
              ))}
            </CustomRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
