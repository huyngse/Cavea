import React from 'react'
import CageConfigLayout from '../../layouts/CageConfigLayout'

function ShapeConfigPage() {
  return (
    <CageConfigLayout>
      <div className="p-2">
        <h1 className="h3">Chọn hình dáng lồng</h1>
      </div>
      <div className='container-fluid mb-3'>
        <div className="row p-2">
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://longchimvac.net/app/webroot/uploads/files/demo/longchaomaovuong_750x1000.jpg" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Vuông
                </h3>
                <a href="/configurator/material">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://chimcanhvietnam.vn/images/sanpham/2094567168n%E1%BB%81n.JPG" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Tròn
                </h3>
                <a href="/configurator/material">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://sieuthilongchim.net/img/webroot/upload/image/files/chao%20mao%20thai%20tre%20gia%20(5).jpg" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Thái
                </h3>
                <a href="/configurator/material">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://i.imgur.com/bhU41y9.jpg" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Uốn Vai
                </h3>
                <a href="/configurator/material">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </CageConfigLayout>
  )
}

export default ShapeConfigPage