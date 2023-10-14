import React from "react";

const OrderCard = (props) => {
  return (
    <div className="bg-white p-3 mb-3">
      <div className="d-flex">
        <h3 className="h5 me-auto">{props.name}</h3>
        <div className="text-primary text-uppercase">
          <small>{props.status}</small>
        </div>
      </div>
      <div>{props.children}</div>
      <div className="d-flex justify-content-end align-items-center mb-3">
        Thành tiền:{" "}
        <h4 className="text-primary ms-3">
          {props.total.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </h4>
      </div>
      <div className="d-flex">
        <button className="ms-auto btn btn-outline-primary me-3">
          Xem chi tiết
        </button>
        {props.status === "đã hủy" && (
          <button className="btn btn-outline-primary me-3">
            Xem chi tiết hủy đơn
          </button>
        )}

        <button className="btn btn-primary">Mua lại</button>
      </div>
    </div>
  );
};

export default OrderCard;
