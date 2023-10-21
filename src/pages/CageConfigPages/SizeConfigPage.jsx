import React from 'react'
import CageConfigLayout from '../../layouts/CageConfigLayout'

function SizeConfigPage() {
  return (
    <CageConfigLayout>
      <div className="p-2">
        <h1 className="h3">Chọn kích thước lồng</h1>
      </div>
      <hr />
      <div className='container mb-3'>
        <h3 className="h5">Số nan</h3>
        <select class="form-select mb-3" aria-label="Default select example">
          <option selected>Chọn số nan</option>
          <option value="1">17</option>
          <option value="1">52</option>
          <option value="2">56 </option>
          <option value="3">60 </option>
          <option value="3">64 </option>
          <option value="3">68 </option>
          <option value="3">72 </option>
        </select>
        <h3 className="h5">Chiều cao</h3>
        <select class="form-select mb-3" aria-label="Default select example">
          <option selected>Chọn chiều cao</option>
          <option value="2">Thường</option>
          <option value="2">Đấu</option>
          <option value="3">Cao</option>
        </select>
        <h3 className="h5">Đường kính</h3>
        <select class="form-select" aria-label="Default select example">
          <option selected>Chọn đường kính</option>
          <option value="1">30cm</option>
          <option value="1">33cm</option>
          <option value="1">36cm</option>
          <option value="1">40cm</option>
          <option value="1">45cm</option>
        </select>
      </div>
      <div className='text-center mb-4'>
        <a href="/configurator/component">
          <button className="btn btn-primary px-5">Lưu và tiếp tục</button>
        </a>
      </div>

    </CageConfigLayout>
  )
}

export default SizeConfigPage