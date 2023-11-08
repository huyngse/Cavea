import React, { useState } from "react";
import { useCart } from "../contexts/CardContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Slide } from "@mui/material";

function CartItem(props) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleAddQuantity = () => {
    try {
      const response = axios.get('http://localhost:8089/cart/add-to-cart?productId=' +
        props.cageId + '&username=' + props.username +
        '&shape=' + props.cageShape + '&material' + props.cageMaterial +
        '&description' + props.shortDecription + '&birdtypeId' + props.birdtypeId + '&basePrice' + props.cagePrice
      );
      window.location.reload(false);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const handleReduceQuantity = () => {
    try {
      const response = axios.get("http://localhost:8089/cart/remove-atom?productId=" + props.productId
        + "&username=" + props.username);
      window.location.reload(false);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const handleDeleteClick = () => {
    try {
      for (var i = 0; i < props.quantity; i++) {
        const response = axios.get("http://localhost:8089/cart/remove-one?productId=" + props.productId
          + "&username=" + props.username);
        window.location.reload(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

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
                  <button
                    className="bg-transparent border-0 text-primary text-start text-decoration-underline"
                  >
                    <small>Xóa?</small>
                  </button>
                </p>
                <div className="text-center mt-auto d-flex align-items-center">
                  <button className="btn ">-</button>
                  <input
                    type="number"
                    className="form-control no-arrow"
                    value={1}
                  // onChange={handleChangeQuantity}
                  />
                  <button className="btn">+</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-3 d-flex flex-column">
                <p>
                  {/* <button className="bg-transparent border-0 text-primary text-start text-decoration-underline">
                    <small>Để dành lần sau</small>
                  </button> */}
                </p>
                <p>
                  <button
                    className="bg-transparent border-0 text-primary text-start text-decoration-underline"
                    onClick={() => handleDeleteClick()}
                  >
                    <small >
                      Xóa?
                    </small>
                  </button>
                </p>

                <div className="text-center mt-auto d-flex align-items-center">
                  <button
                    className="btn"
                    disabled={props.quantity <= 0}
                    onClick={() => handleReduceQuantity()}
                  >
                    -
                  </button>
                  <input
                    id="productQuantity"
                    type="number"
                    className="form-control no-arrow"
                    value={props.quantity}
                    disabled={true}
                  />
                  <button
                    className="btn"
                    onClick={() => handleAddQuantity()}
                    disabled={props.quantity >= props.maxQuantity}
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
