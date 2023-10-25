import React from "react";
import { useCart } from "../contexts/CardContext";
import CartItem from "../components/CartItem";
import MainLayout from "../layouts/MainLayout";

export default function ViewCardForm() {
  const { cart, totalPrice } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Used to count the number of products added
  return (
    <MainLayout>
      <div className="container" style={{ minHeight: "500px" }}>
        <div className="row my-3">
          <div className="col-8">
            <h2 className="border-bottom py-3 mb-3">
              Hiện đang có {totalQuantity} sản phẩm trong giỏ hàng
            </h2>
            {cart && cart.length > 0 ? (
              <div>
                {cart.map((item) => (
                  <CartItem
                    key={item.cageId}
                    id={item.cageId}
                    image={item.image}
                    name={item.cageName}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam maxime, aperiam harum blanditiis ducimus alias nemo, qui autem doloribus ea, voluptatibus quo in nisi vitae explicabo assumenda ipsam vero!"
                    price={item.price}
                    cost={item.price}
                    quantity={item.quantity}
                  />
                ))}

                <div
                  variant="h6"
                  color="text.secondary"
                  style={{ padding: "1rem" }}
                ></div>
              </div>
            ) : (
              <p>Giỏ đang trống.</p>
            )}
            {/* ###################################################### */}
            <h2 className="border-bottom py-3 mb-3">Sản phẩm để dành</h2>
            <CartItem
              image="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
              name="Sảm phẩm số #1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam maxime, aperiam harum blanditiis ducimus alias nemo, qui autem doloribus ea, voluptatibus quo in nisi vitae explicabo assumenda ipsam vero!"
              price={1000}
              cost={1000}
              archive
            />
          </div>
          <div className="col-4 ps-5 mt-5">
            <div className="text-center mb-4">
              <h2>Tổng cộng </h2>
              <h3 className="text-primary mb-3">
                {totalPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </h3>
              <a href="/checkout">
                <button className="btn btn-primary mx-auto w-50">
                  Đặt hàng
                </button>
              </a>
            </div>
            <ul className="ps-3">
              <a href="/">
                <li>Tiếp tục mua hàng</li>
              </a>
              <a href="/">
                <li>Trở về</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
