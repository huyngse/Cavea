import React from 'react'
import CageConfigLayout from '../../layouts/CageConfigLayout'
import { formatCurrency } from '../../utils/utils'

function ComponentConfigPage() {
  return (
    <CageConfigLayout>
      <table class="table table-bordered">
        <thead>
          <tr className='table-primary'>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Tên</th>
            <th scope="col">Giá</th>
            <th scope="col">Số lượng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="https://www.sieuthilongchim.net//img/webroot/upload/image/files/CAU%20GOC%20MUN%20(2).jpg" alt="" style={{ width: "150px" }} /></td>
            <td>Cầu góc tre <br />
              Dùng để cho chim đậu
            </td>
            <td>{formatCurrency(15000)}</td>
            <td>
              <select class="form-select" aria-label="Default select example" style={{ width: "100px" }}>
                <option selected>0</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><img src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljsmv2lv7a9gbe" alt="" style={{ width: "150px" }} /></td>
            <td>Rọ đựng Dế <br />
              Dùng để chứa thức ăn côn trùng cho chim
            </td>
            <td>{formatCurrency(19000)}</td>
            <td>
              <select class="form-select" aria-label="Default select example" style={{ width: "100px" }}>
                <option selected>0</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><img src="https://www.sieuthilongchim.net//img/webroot/upload/image/images/Ph%E1%BB%A5%20ki%E1%BB%87n%20l%E1%BB%93ng%20chim/cong-sung-long-khuyen-dep%20(1).jpg" alt="" style={{ width: "150px" }} /></td>
            <td>Cóng <br />
              Dùng để chứa nước uống cho chim
            </td>
            <td>{formatCurrency(350000)}</td>
            <td>
              <select class="form-select" aria-label="Default select example" style={{ width: "100px" }}>
                <option selected>0</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='text-center mb-4'>
        <a href="/configurator/summary">
          <button className="btn btn-primary px-5">Lưu và tiếp tục</button>
        </a>
      </div>
    </CageConfigLayout>
  )
}

export default ComponentConfigPage