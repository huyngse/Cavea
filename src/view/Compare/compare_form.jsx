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
import { CustomRow, CartButton } from "./style_component";
import TableRow from "@mui/material/TableRow";
import "./compare_page.css"
import { width } from "@mui/system";

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
      <TableContainer className="table-container"
        component={Paper}
      >
        <h2>Trang so sánh sản phẩm</h2>
        <Table className="compare-table" style={{width: 'fit-content'}}>
          <TableBody >
            <TableRow>
              <TableCell>Sản phẩm</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id} className="compare-cell" >
                  <img
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
            </TableRow>

            <TableRow>
              <TableCell>Tên</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.name}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Mô tả</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.descriptions}</TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Đánh giá</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>
                  <BasicRating value={product.rating} />
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Giá</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.price}</TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell>Giảm còn</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.discount}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Hình dáng</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.shape}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Nguyên liệu</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.material}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Số nan</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.spoke}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Móc</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.hanger}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Chân quỳ</TableCell>
              {compareProductDetails.map((product) => (
                <TableCell key={product.id}>{product.base}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
