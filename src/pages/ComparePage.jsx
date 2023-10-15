import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { products } from "../components/CageList/list_product";
import MainLayout from "../layouts/MainLayout";
import Rating from "@mui/material/Rating";

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
              <td key={product.id} className="compare-cell" width="200px">
                <img
                  className="img-fluid mb-3"
                  src={product.image}
                  alt={product.name}
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
              <td key={product.id}>{product.name}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Đánh giá</th>
            {compareProductDetails.map((product) => (
              <td key={product.id}>
                <Rating
                  name="read-only"
                  value={product.rating}
                  readOnly
                  precision={0.5}
                />
              </td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Giá</th>
            {compareProductDetails.map((product) => (
              <td key={product.id}>
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
              <td key={product.id}>
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
              <td key={product.id}>{product.shape}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Nguyên liệu</th>
            {compareProductDetails.map((product) => (
              <td key={product.id}>{product.material}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Số nan</th>
            {compareProductDetails.map((product) => (
              <td key={product.id}>{product.spoke}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Móc</th>
            {compareProductDetails.map((product) => (
              <td key={product.id}>{product.hanger}</td>
            ))}
          </tr>
          <tr>
            <th className="align-middle">Chân quỳ</th>
            {compareProductDetails.map((product) => (
              <td key={product.id}>{product.base}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </MainLayout>
  );
}
