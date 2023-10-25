import React, { useEffect, useState } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MainLayout from "../layouts/MainLayout";
import Rating from "@mui/material/Rating";

export default function CompareForm() {
  const location = useLocation();
  const { compareProducts } = location.state;
  const [products, setProducts] = useState([]);
  const [compareProductDetails, setSelectedProductDetails] = useState([]);
  console.log(products);
  useEffect(() => {
    axios.get("http://localhost:8080/product/all").then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    const productsDetails = products.filter((product) =>
      compareProducts.includes(product.cageId)
    );
    setSelectedProductDetails(productsDetails);
  }, [compareProducts, products]);

  return (
    <MainLayout>
      <h2 className="text-center m-3 ">Trang so sánh sản phẩm</h2>
      <table
        className="m-3 table mx-auto shadow"
        style={{ width: "fit-content" }}
      >
        <tbody>
          <tr>
            <th className="align-middle">Sản phẩm</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId} className="compare-cell" width="200px">
                <img
                  className="img-fluid mb-3"
                  src={product.imageId}
                  alt={product.cageName}
                />
                <button className="btn btn-primary w-100">
                  <AddShoppingCartIcon className="me-2" />
                  Thêm vào giỏ
                </button>
              </td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Tên</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId}>{product.cageName}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Đánh giá</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId}>
                <Rating
                  name="read-only"
                  value={product.rate}
                  readOnly
                  precision={0.5}
                />
              </td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Giá</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId}>
                {product.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Giảm còn</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId}>
                {product.discount.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Hình dáng</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId}>{product.shape}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Nguyên liệu</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId}>{product.material}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Số nan</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId}>{product.spokes}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Móc</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId}>{product.hanger}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Chân quỳ</th>
            {compareProductDetails.map((product) => (
              <td key={product.cageId}>{product.feet}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </MainLayout>
  );
}
