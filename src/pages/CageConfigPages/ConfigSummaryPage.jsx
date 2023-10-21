import React from 'react'
import CageConfigLayout from '../../layouts/CageConfigLayout'

function ConfigSummaryPage() {
  return (
    <CageConfigLayout>
      <div className="p-2">
        <h1 className="h3">Tóm tắt đơn hàng</h1>
      </div>
      <div className='p-3'>
        Cảm ơn bạn đã dành thời gian hoàn thành cấu hình lồng chim tùy chỉnh! Vui lòng xem lại chi tiết đơn hàng ở phía bên phải màn hình. Nếu mọi thứ đều chính xác, vui lòng tiếp tục và nhấp vào nút "Tiếp tục thanh toán" bên dưới để thêm cấu hình lồng chim này. Nếu bạn có bất kỳ câu hỏi nào, vui lòng gọi tới bộ phận hỗ trợ 800-941-2243. Chân thành cảm ơn!
        <br />
        Bạn sẽ nhận được báo giá vận chuyển tùy chỉnh trước khi chúng tôi xử lý đơn đặt hàng của bạn. Chi phí vận chuyển điển hình cho việc giao hàng là 15-25% giá của mẫu lồng.
      </div>
      <div className='text-center mb-4'>
        <a href="/">
          <button className="btn btn-primary px-5">Tiếp tục thanh toán</button>
        </a>
      </div>
    </CageConfigLayout>
  )
}

export default ConfigSummaryPage