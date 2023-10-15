import React from "react";
import { useCart } from "../contexts/CardContext";

function CartItem(props) {
  function handleChangeQuantity() {}
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    <div className="row mb-3  p-3 shadow">
      <div className="col-3">
        <img src={props.image} className="img-fluid" alt=""></img>
      </div>
      <div className="col-9">
        <h5>{props.name}</h5>
        <div className="row">
          <div className="col-6">
            <small>{props.description}</small>
          </div>
          <div className="col-3">
            <p>
              Giá sản phẩm:{" "}
              {props.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <p>
              Thành tiền:{" "}
              {props.cost.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
          {props.archive ? (
            <>
              <div className="col-3 d-flex flex-column">
                <p>
                  <button className="bg-transparent border-0 text-primary text-start text-decoration-underline">
                    <small>Thêm vào giỏ hàng</small>
                  </button>
                </p>
                <p>
                  <button className="bg-transparent border-0 text-primary  text-start text-decoration-underline">
                    <small>Xóa?</small>
                  </button>
                </p>
                <div className="text-center mt-auto d-flex align-items-center">
                  <button className="btn ">-</button>
                  <input
                    type="number"
                    className="form-control no-arrow"
                    value={1}
                    onChange={handleChangeQuantity}
                  />
                  <button className="btn">+</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-3 d-flex flex-column">
                <p>
                  <button className="bg-transparent border-0 text-primary text-start text-decoration-underline">
                    <small>Để dành lần sau</small>
                  </button>
                </p>
                <p>
                  <button className="bg-transparent border-0 text-primary text-start text-decoration-underline">
                    <small onClick={() => removeFromCart(props.id)}>Xóa?</small>
                  </button>
                </p>

                <div className="text-center mt-auto d-flex align-items-center">
                  <button
                    className="btn "
                    onClick={() => decreaseQuantity(props.id)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control no-arrow"
                    value={props.quantity}
                    onChange={handleChangeQuantity}
                  />
                  <button
                    className="btn"
                    onClick={() => increaseQuantity(props.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
