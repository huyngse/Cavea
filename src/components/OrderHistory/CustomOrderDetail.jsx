import React from "react";

const valueMapping = {
  0: "Chờ xác nhận",
  1: "Thành công",
  2: "Đã hủy",
  3: "Đang giao",
  4: "Đã giao",
};

const colorMapping = {
  0: "#FED000",
  1: "#4C9A2A",
  2: "#E53935",
  3: "#FED000",
  4: "#FED000",
};

function getFormatDate(dateString) {
  const createdDate = new Date(dateString.substring(0, 10));
  const yyyy = createdDate.getFullYear();
  let mm = createdDate.getMonth() + 1; // Months start at 0!
  let dd = createdDate.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedDate = dd + "/" + mm + "/" + yyyy;
  return formattedDate;
}

export default function CustomOrderDetail(props) {
  function formatCurrency(number) {
    return number.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }

  console.log("Custom order detail: ", props);

  return (
    <div className="p-4">
      <h4 className="fw-bold text-primary">Đơn hàng</h4>
      <table className="table table-bordered mb-5">
        <thead className="text-center">
          <tr>
            <th className="bg-primary text-white">Tên sản phẩm</th>
            <th className="bg-primary text-white">Mô tả</th>
            <th className="bg-primary text-white">Đơn giá</th>
            <th style={{ minWidth: "100px" }} className="bg-primary text-white">
              Số lượng
            </th>
            <th className="bg-primary text-white">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.fullData.material}</td>
            <td>{props.fullData.description}</td>
            <td>{formatCurrency(props.fullData.price)}</td>
            <td className="text-center">1</td>
            <td>{formatCurrency(props.fullData.price)}</td>
          </tr>
        </tbody>
      </table>
      <div className="row mb-3">
        <div className="col-6">
          <h4 className="fw-bold text-primary">Thông tin đơn hàng</h4>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th className="p-2 ">Mã đơn hàng</th>
                <td className="p-2 ">{props.fullData.id}</td>
              </tr>
              <tr>
                <th className="p-2 ">Trạng thái</th>
                <td className="p-2 ">
                  <span
                    className="p-0 fw-bold"
                    style={{ color: `${colorMapping[props.status]}` }}
                  >
                    {valueMapping[props.status]}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="p-2 ">Ngày tạo đơn hàng</th>
                <td className="p-2 ">
                  {getFormatDate(props.fullData.createdDate)}
                </td>
              </tr>
              <tr>
                <th className="p-2 ">Ngày giao hàng dự kiến</th>
                <td className="p-2 ">
                  {getFormatDate(props.fullData.expectedDate)}
                </td>
              </tr>
              <tr>
                <th className="p-2 ">Ngày đóng đơn hàng</th>
                <td className="p-2 "></td>
              </tr>
              {/* <tr>
                                <th className='p-2 '>
                                    Lý do hủy đơn
                                </th>
                                <td className='p-2 '>
                                </td>
                            </tr> */}
              <tr>
                <th className="p-2 ">Ghi chú đơn hàng</th>
                <td className="p-2 "></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <h4 className="fw-bold text-primary">Thông tin giao hàng</h4>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th className="p-2 ">Họ và tên</th>
                <td className="p-2 ">
                  {`${props.userInfo.firstName} ${props.userInfo.lastName}`}
                </td>
              </tr>
              <tr>
                <th className="p-2 ">Email</th>
                <td className="p-2 ">{props.userInfo.email}</td>
              </tr>
              <tr>
                <th className="p-2 ">Số điện thoại</th>
                <td className="p-2 ">{props.userInfo.phone}</td>
              </tr>
              <tr>
                <th className="p-2 ">Địa chỉ</th>
                <td className="p-2 ">{props.userInfo.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h4 className="fw-bold text-primary">Thông tin thanh toán</h4>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th>Ngày thanh toán</th>
                <td>{getFormatDate(props.fullData.datePay)}</td>
              </tr>
              <tr>
                <th>Trạng thái</th>
                <td>
                  <span
                    className="p-0 fw-bold"
                    style={{ color: `${colorMapping[props.fullData.status]}` }}
                  >
                    {valueMapping[props.fullData.status]}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Phương thức thanh toán</th>
                <td>{props.fullData.payment.method}</td>
              </tr>
              <tr>
                <th>Số tiền</th>
                <td>
                  {formatCurrency(Number.parseInt(`${props.fullData.price}`))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
