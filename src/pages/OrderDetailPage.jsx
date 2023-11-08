import React from "react";
import MainLayout from "../layouts/MainLayout";
import OrderDetail from "../components/OrderHistory/OrderDetail";

export default function OrderDetailPage() {
  function formatCurrency(number) {
    return number.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  return (
    <MainLayout>
      <div className="container">
        <div className="px-4 pt-4">
          <h4 className="fw-bold text-primary">Hóa đơn</h4>
          <table className="table mb-5">
            <tbody>
              <tr>
                <th className="p-2 ">Ngân hàng thanh toán</th>
                <td className="p-2 ">NCB</td>
              </tr>
              <tr>
                <th className="p-2 ">Mã giao dịch tại ngân hàng</th>
                <td className="p-2 ">VNP13976289</td>
              </tr>
              <tr>
                <th className="p-2 ">
                  Mã giao dịch ghi nhận tại hệ thống VNPAY
                </th>
                <td className="p-2 ">13976289</td>
              </tr>
              <tr>
                <th className="p-2 ">Loại tài khoản/thẻ</th>
                <td className="p-2 ">ATM</td>
              </tr>
              <tr>
                <th className="p-2 ">Thời gian thanh toán</th>
                <td className="p-2 ">25/03/2023 08:37:33</td>
              </tr>
              <tr>
                <th className="p-2 ">Nội dung thanh toán</th>
                <td className="p-2 ">
                  Thanh toan don hang 080340, so tien 750000
                </td>
              </tr>
              <tr>
                <th className="p-2 ">Số tiền thanh toán</th>
                <td className="p-2 ">{formatCurrency(750000)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <OrderDetail />
      </div>
    </MainLayout>
  );
}
