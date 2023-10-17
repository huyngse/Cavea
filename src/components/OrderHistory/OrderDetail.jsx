import React from 'react';

export default function OrderDetail(props) {
    function formatCurrency(number) {
        return number.toLocaleString("vi-VN", { style: "currency", currency: "VND", });
    }
    return (
        <div className='p-4'>
            <h4 className='fw-bold text-primary'>Hóa đơn</h4>
            <table className='table mb-5'>
                <tbody>
                    <tr>
                        <th className='p-2 '>
                            Ngân hàng thanh toán
                        </th>
                        <td className='p-2 '>
                            NCB
                        </td>
                    </tr>
                    <tr>
                        <th className='p-2 '>
                            Mã giao dịch tại ngân hàng
                        </th>
                        <td className='p-2 '>
                            VNP13976289
                        </td>
                    </tr>
                    <tr>
                        <th className='p-2 '>
                            Mã giao dịch ghi nhận tại hệ thống VNPAY
                        </th>
                        <td className='p-2 '>
                            13976289
                        </td>
                    </tr>
                    <tr>
                        <th className='p-2 '>
                            Loại tài khoản/thẻ
                        </th>
                        <td className='p-2 '>
                            ATM
                        </td>
                    </tr>
                    <tr>
                        <th className='p-2 '>
                            Thời gian thanh toán
                        </th>
                        <td className='p-2 '>
                            25/03/2023 08:37:33
                        </td>
                    </tr>
                    <tr>
                        <th className='p-2 '>
                            Nội dung thanh toán
                        </th>
                        <td className='p-2 '>
                            Thanh toan don hang 080340, so tien 750000
                        </td>
                    </tr>
                    <tr>
                        <th className='p-2 '>
                            Số tiền thanh toán
                        </th>
                        <td className='p-2 '>
                            {formatCurrency(750000)}
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4 className='fw-bold text-primary'>Đơn hàng</h4>
            <table className='table table-bordered mb-5'>
                <thead className='text-center'>
                    <tr >
                        <th className='bg-primary text-white'>
                            Tên sản phẩm
                        </th>
                        <th className='bg-primary text-white'>
                            Mô tả
                        </th>
                        <th className='bg-primary text-white'>
                            Đơn giá
                        </th>
                        <th style={{ minWidth: "100px" }} className='bg-primary text-white'>
                            Số lượng
                        </th>
                        <th className='bg-primary text-white'>
                            Thành tiền
                        </th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>LỒNG CHIM KHUYÊN THÂN TRIỆN T ĐỤC HOA MAI</td>
                        <td>Do đặc thù LỒNG CHIM  là hàng CỒNG KỀNH nên phí vận chuyển được đơn vị vận chuyển ước tính theo kích thước đóng thùng</td>
                        <td>
                            {formatCurrency(1850000)}
                        </td>
                        <td className='text-center'>
                            1
                        </td>
                        <td>
                            {formatCurrency(1850000)}
                        </td>
                    </tr>
                    <tr>
                        <td>LỒNG CHIM CHÒE THAN TRÚC CẬT SIÊU KỸ SIZE 40CM</td>
                        <td></td>
                        <td>
                            {formatCurrency(990000)}
                        </td>
                        <td className='text-center'>
                            2
                        </td>
                        <td>
                            {formatCurrency(990000 * 2)}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="row mb-3">
                <div className="col-6">
                    <h4 className='fw-bold text-primary'>Thông tin đơn hàng</h4>
                    <table className='table table-borderless'>
                        <tbody>
                            <tr>
                                <th className='p-2 '>
                                    Mã đơn hàng
                                </th>
                                <td className='p-2 '>
                                    196
                                </td>
                            </tr>
                            <tr>
                                <th className='p-2 '>
                                    Trạng thái
                                </th>
                                <td className='p-2 '>
                                    <span className='p-0 text-warning fw-bold'>
                                        Chờ xác nhận
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th className='p-2 '>
                                    Ngày tạo đơn hàng
                                </th>
                                <td className='p-2 '>
                                    25/03/2023
                                </td>
                            </tr>
                            <tr>
                                <th className='p-2 '>
                                    Ngày giao hàng dự kiến
                                </th>
                                <td className='p-2 '>
                                </td>
                            </tr>
                            <tr>
                                <th className='p-2 '>
                                    Ngày đóng đơn hàng
                                </th>
                                <td className='p-2 '>
                                </td>
                            </tr>
                            <tr>
                                <th className='p-2 '>
                                    Lý do hủy đơn
                                </th>
                                <td className='p-2 '>
                                </td>
                            </tr>
                            <tr>
                                <th className='p-2 '>
                                    Ghi chú đơn hàng
                                </th>
                                <td className='p-2 '>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className="col-6">
                    <h4 className='fw-bold text-primary'>Thông tin giao hàng</h4>
                    <table className='table table-borderless'>
                        <tbody>
                            <tr>
                                <th className='p-2 '>
                                    Họ và tên
                                </th>
                                <td className='p-2 '>
                                    Lê Thị Kim Phụng
                                </td>
                            </tr>
                            <tr>
                                <th className='p-2 '>
                                    Email
                                </th>
                                <td className='p-2 '>
                                    helloworld@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <th className='p-2 '>
                                    Số điện thoại
                                </th>
                                <td className='p-2 '>
                                    0865429535
                                </td>
                            </tr>
                            <tr>
                                <th className='p-2 '>
                                    Địa chỉ
                                </th>
                                <td className='p-2 '>
                                    452 Quang Trung, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h4 className='fw-bold text-primary'>Thông tin thanh toán</h4>
                    <table className='table table-borderless'>
                        <tbody>
                            <tr>
                                <th>Ngày thanh toán</th>
                                <td>25/03/2023</td>
                            </tr>
                            <tr>
                                <th>Trạng thái</th>
                                <td><span className='fw-bold text-success'>Thành công</span></td>
                            </tr>
                            <tr>
                                <th>Phương thức thanh toán</th>
                                <td>Thanh toán bằng VNPay</td>
                            </tr>
                            <tr>
                                <th>Số tiền</th>
                                <td>{formatCurrency(750000)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

