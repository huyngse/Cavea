import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Modal from "@mui/material/Modal";
//TODO: CHANGE TO MUI MODAL
export default function OrderDetailPage() {
  const [openDenyModal, setOpenDenyModal] = React.useState(false);
  const handleOpenDenyModal = () => setOpenDenyModal(true);
  const handleCloseDenyModal = () => setOpenDenyModal(false);

  const [openAcceptModal, setOpenAcceptModal] = React.useState(false);
  const handleOpenAcceptModal = () => setOpenAcceptModal(true);
  const handleCloseAcceptModal = () => setOpenAcceptModal(false);
  function formatCurrency(number) {
    return number.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  return (
    <AdminLayout>
      <div className="bg-gray p-3">
        <h1 className="h3 py-3">Chi tiết đơn hàng #23 - Chờ xác nhận</h1>
        <div className="bg-white p-4 mb-3">
          <h4 className="fw-bold text-primary">Thông tin khách hàng</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th className="p-2 ">Tên khách hàng</th>
                <td className="p-2 ">Lê Thị Mận</td>
              </tr>
              <tr>
                <th className="p-2 ">Email</th>
                <td className="p-2 ">helloworld@gmail.com</td>
              </tr>
              <tr>
                <th className="p-2 ">Số điện thoại</th>
                <td className="p-2 ">0865429535</td>
              </tr>
              <tr>
                <th className="p-2 ">Địa chỉ</th>
                <td className="p-2 ">
                  452 Quang Trung, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh,
                  Việt Nam
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row mb-3">
            <div className="col-6">
              <h4 className="fw-bold text-primary">Thanh toán</h4>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th>Ngày thanh toán</th>
                    <td>25/03/2023</td>
                  </tr>
                  <tr>
                    <th>Phương thức thanh toán</th>
                    <td>Thanh toán bằng VNPay</td>
                  </tr>
                  <tr>
                    <th>Số tiền</th>
                    <td>{formatCurrency(2840000)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <h4 className="fw-bold text-primary">Thời gian</h4>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th className="p-2 ">Ngày đặt hàng</th>
                    <td className="p-2 ">16/10/2023</td>
                  </tr>
                  <tr>
                    <th className="p-2 ">Ngày dự kiến giao</th>
                    <td className="p-2 ">Chưa xác nhận</td>
                  </tr>
                  <tr>
                    <th className="p-2 ">Ngày lấy hàng</th>
                    <td className="p-2 ">Chưa lấy hàng</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h4 className="fw-bold text-primary">Đơn hàng</h4>
          <table className="table table-bordered mb-5">
            <thead className="text-center">
              <tr>
                <th className="bg-primary text-white align-middle">MSP</th>
                <th className="bg-primary text-white align-middle">
                  Tên sản phẩm
                </th>
                <th className="bg-primary text-white align-middle">
                  Loại sản phẩn
                </th>
                <th className="bg-primary text-white align-middle">Đơn giá</th>
                <th
                  style={{ minWidth: "100px" }}
                  className="bg-primary text-white align-middle"
                >
                  Số lượng
                </th>
                <th
                  style={{ minWidth: "100px" }}
                  className="bg-primary text-white align-middle"
                >
                  Số lượng tồn
                </th>
                <th className="bg-primary text-white align-middle">
                  Thành tiền
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td>LỒNG CHIM KHUYÊN THÂN TRIỆN T ĐỤC HOA MAI</td>
                <td>Lồng chim khuyên</td>
                <td>{formatCurrency(1850000)}</td>
                <td className="text-center">1</td>
                <td className="text-center">10</td>
                <td>{formatCurrency(1850000)}</td>
              </tr>
              <tr>
                <td className="text-center">5</td>
                <td>LỒNG CHIM CHÒE THAN TRÚC CẬT SIÊU KỸ SIZE 40CM</td>
                <td>Lồng chim chòe than</td>
                <td>{formatCurrency(990000)}</td>
                <td className="text-center">2</td>
                <td className="text-center">10</td>
                <td>{formatCurrency(990000 * 2)}</td>
              </tr>
            </tbody>
          </table>

          <div className="row">
            <div className="col-7"></div>
            <div className="col-5">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="h4 text-primary">Tổng thanh toán:</td>
                    <td className="h4 text-primary">
                      {formatCurrency(2840000)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <a href="/admin/manage-order">
              &lt;&lt;&lt; Quay về danh sánh đơn hàng
            </a>
          </div>
          <div className="text-end">
            <button
              className="btn btn-danger me-3"
              onClick={handleOpenDenyModal}
            >
              Từ chối
            </button>
            <button className="btn btn-primary" onClick={handleOpenAcceptModal}>
              Chấp nhận
            </button>
          </div>
        </div>
      </div>
      <Modal
        open={openDenyModal}
        onClose={handleCloseDenyModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{ width: "500px" }}
          className="bg-white p-3 mt-5 position-absolute start-50 translate-middle-x"
        >
          <h3 className="h4">Từ chối đơn hàng</h3>
          <hr />
          <div className="mb-3">
            <label
              htmlFor="denyMessage"
              className="form-label h6 text-muted text-center w-100"
            >
              Nhập lý do từ chối đơn hàng
            </label>
            <textarea
              className="form-control"
              id="denyMessage"
              rows="3"
            ></textarea>
          </div>
          <div className="text-end">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={handleCloseDenyModal}
            >
              Hủy
            </button>
            <button type="button" className="btn btn-danger">
              Lưu
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={openAcceptModal}
        onClose={handleCloseAcceptModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{ width: "500px" }}
          className="bg-white p-3 mt-5 position-absolute start-50 translate-middle-x"
        >
          <h3 className="h4">Chấp nhận đơn hàng</h3>
          <hr />
          <p className="h6 text-muted text-center">
            Chọn ngày và giờ dự kiện giao
          </p>
          <div className="d-flex">
            <div className="mx-auto mb-3">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DateTimePicker", "DateTimePicker"]}
                >
                  <DateTimePicker
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div className="text-end">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={handleCloseAcceptModal}
            >
              Hủy
            </button>
            <button type="button" className="btn btn-primary">
              Đồng ý
            </button>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
}
