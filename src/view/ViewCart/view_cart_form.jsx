import React from "react";
import { useCart } from "../../CardContext";
import CartItem from "./CartItem";

export default function ViewCardForm() {
  const {
    cart,
    totalPrice,
  } = useCart();

  return (
    <div className="container" style={{ minHeight: '500px' }}>
      <div className="row my-3">
        <div className="col-8">
          <h2 className="border-bottom py-3 mb-3">Hiện đang có # sản phẩm trong giỏ hàng</h2>
          {cart && cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
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
              >

              </div>
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
        <div className="col-4 p-3">
          <h2>Tổng cộng: </h2>
          <h3 className="text-primary">
            {totalPrice.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </h3>
          <button className="btn btn-primary mb-3">
            Đặt hàng
          </button>
          <ul className="ps-3">
            <a href="/">
              <li>
                Tiếp tục mua hàng
              </li>
            </a>
            <a href="/">
              <li>
                Trở về
              </li>
            </a>

          </ul>
        </div>
      </div>
    </div>

  );
}