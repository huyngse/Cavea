import React from 'react'

const CheckoutContent = () => {
    const cartData = [
        {
            img: "https://www.sieuthilongchim.net//admin/webroot/upload/image/images/chao%20mao/longchaomao%20(1).jpg",
            name: "LỒNG CHIM CHÀO MÀO SINGAPORE MỚI",
            type: "chim chào mào",
            quantity: 2,
            cost: 200000
        },
        {
            img: "https://www.sieuthilongchim.net//admin/webroot/upload/image/images/chao%20mao/longchoethanchanduasize40%20(4).jpg",
            name: "LỒNG CHIM CHOE THAN CỦA KIẾM TRÚC CẬT KỸ SIZE40",
            type: "chim chòe than",
            quantity: 2,
            cost: 200000
        },
        {
            img: "https://www.sieuthilongchim.net//img/webroot/upload/image/images/l%E1%BB%93ng%20ch%C3%B2e%20than/long-choe-lua-duc-dot-truc.jpg",
            name: "LỒNG CHOÈ LỬA CHẠM ĐỐT TRÚC THỦ CÔNG",
            type: "chim chòe lửa",
            quantity: 1,
            cost: 100000
        },
    ]
    const totalCost = 500000;
    return (
        <div className='flex-grow-1 container py-3'>
            <h1 className='h2 border-bottom mb-3'>Đơn hàng</h1>
            <div className='row mb-5'>
                <div className='col-7'>
                    <section>
                        <h2 className='h5'>Địa chỉ giao hàng</h2>
                        <span className='h6'>Tên khách hàng: </span>Nguyễn Văn A
                        <br />
                        <span className='h6'>Email: </span>nguyenvana@gmail.com
                        <br />
                        <span className='h6'>Số điện thoại: </span>092-5724-345
                        <br />
                        <span className='h6'>Địa chỉ: </span>Khu Công Nghệ Cao Hòa Lạc, Km29 Đại lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội, Việt Nam
                    </section>
                </div>
                <div className='col-5 ps-3'>
                    <section className='mb-3'>
                        <h2 className='h5'>Thông tin tài khoản</h2>
                        <span className='h6'>Tên khách hàng: </span>Nguyễn Văn A
                        <br />
                        <span className='h6'>Email: </span>nguyenvana@gmail.com
                        <br />
                        <span className='h6'>Số điện thoại: </span>092-5724-345
                    </section>
                </div>
            </div>

            <div className='row'>
                <div className='col-7'>
                    <h2 className='h5'>Tóm tắt giỏ hàng</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SST</th>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Thông tin sản phẩm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <div style={{ maxWidth: "100px" }}>
                                            <img className="img-fluid" src={item.img} alt=''></img>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className='h6'>Tên sản phẩm: </span>{item.name}
                                        </div>
                                        <div>
                                            <span className='h6'>Loại: </span>{item.type}
                                        </div>
                                        <div>
                                            <span className='h6'>Số lượng: </span>{item.quantity}
                                        </div>
                                        <div>
                                            <span className='h6'>Thành tiền: </span>{item.cost.toLocaleString("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='text-end'>
                        <span className='text-muted'>Tổng cộng: </span>
                        <span className='text-primary h3'>{totalCost.toLocaleString("vi-VN", { style: "currency", currency: "VND", })}</span>
                    </div>
                </div>
                <div className='col-5 ps-3 mb3'>
                    <div className='mb-3'>
                        <label className='h5'>Ghi chú đơn hàng</label>
                        <textarea className="form-control" id="orderNote" rows="3" placeholder='Ghi chú trong trường hợp địa chỉ khó tìm'></textarea>
                    </div>
                    <div className='mb-3'>
                        <h2 className='h5'>Phương thức thanh toán</h2>
                        <div className='ps-3'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="paymentMethod1" checked/>
                                <label className="form-check-label" htmlFor="paymentMethod1">
                                    Bằng VNPay
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="paymentMethod2" />
                                <label className="form-check-label" htmlFor="paymentMethod2">
                                    Thanh toán tại cửa hàng
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="paymentMethod3" />
                                <label className="form-check-label" htmlFor="paymentMethod3">
                                    Đặt cọc trước 50%
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="paymentMethod4" />
                                <label className="form-check-label" htmlFor="paymentMethod4">
                                    Thanh toán trực tiếp cho nhân viên giao hàng
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex'>
                        <button className='btn btn-primary mx-auto w-50'>
                            Thanh toán
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CheckoutContent