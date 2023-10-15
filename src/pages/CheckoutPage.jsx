import React from "react";
import Cookies from "js-cookie";
import { useCart } from "../contexts/CardContext";
import MainLayout from "../layouts/MainLayout";

export default function CheckoutPage() {
  const email = Cookies.get("email");
  const phone = Cookies.get("phone");
  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");
  const { cart, totalPrice } = useCart();

  return (
    <MainLayout>
      <div className="bg-white">
        <div className="flex-grow-1 container py-3 ">
          <h1 className="h2 border-bottom mb-3">Đơn hàng</h1>
          <div className="row mb-5">
            <div className="col-7">
              <section>
                <h2 className="h5">Địa chỉ giao hàng</h2>
                <span className="h6">
                  Tên khách hàng:{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {firstName} {lastName}
                  </span>
                </span>
                <br />
                <span className="h6">
                  Email: <span style={{ fontWeight: "normal" }}>{email}</span>
                </span>
                <br />
                <span className="h6">
                  Số điện thoại:{" "}
                  <span style={{ fontWeight: "normal" }}>{phone}</span>
                </span>
                <br />
                <span className="h6">Địa chỉ:</span>
              </section>
            </div>
            <div className="col-5 ps-3">
              <section className="mb-3">
                <h2 className="h5">Thông tin tài khoản</h2>
                <span className="h6">
                  Tên khách hàng:{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {firstName} {lastName}
                  </span>
                </span>
                <br />
                <span className="h6">Email: </span>
                <span style={{ fontWeight: "normal" }}>{email}</span>
                <br />
                <span className="h6">
                  Số điện thoại:{" "}
                  <span style={{ fontWeight: "normal" }}>{phone}</span>
                </span>
              </section>
            </div>
          </div>

          <div className="row">
            <div className="col-7">
              <h2 className="h5">Tóm tắt giỏ hàng</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">SST</th>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Thông tin sản phẩm</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <div style={{ maxWidth: "100px" }}>
                          <img
                            className="img-fluid"
                            src={item.image}
                            alt=""
                          ></img>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="h6">Tên sản phẩm: </span>
                          {item.name}
                        </div>
                        <div>
                          <span className="h6">Loại: </span>
                          {item.type}
                        </div>
                        <div>
                          <span className="h6">Số lượng: </span>
                          {item.quantity}
                        </div>
                        <div>
                          <span className="h6">Thành tiền: </span>
                          {item.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-end">
                <span className="text-muted">Tổng cộng: </span>
                <span className="text-primary h3">
                  {totalPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
            </div>
            <div className="col-5 ps-3 mb3">
              <div className="mb-3">
                <label className="h5">Ghi chú đơn hàng</label>
                <textarea
                  className="form-control"
                  id="orderNote"
                  rows="3"
                  placeholder="Ghi chú trong trường hợp địa chỉ khó tìm"
                ></textarea>
              </div>
              <div className="mb-3">
                <h2 className="h5">Phương thức thanh toán</h2>
                <div className="ps-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="paymentMethod1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="paymentMethod1"
                    >
                      Bằng VNPay
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="paymentMethod2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="paymentMethod2"
                    >
                      Thanh toán tại cửa hàng
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="paymentMethod3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="paymentMethod3"
                    >
                      Đặt cọc trước 50%
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="paymentMethod4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="paymentMethod4"
                    >
                      Thanh toán trực tiếp cho nhân viên giao hàng
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <a href="/order-detail" className="mx-auto w-50">
                  <button className="btn btn-primary ">Thanh toán</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
