import React from 'react'
import CageConfigLayout from '../../layouts/CageConfigLayout'

function MaterialConfigPage() {
  return (
    <CageConfigLayout>
      <div className="p-2">
        <h1 className="h3">Chọn nguyên liệu lồng</h1>
      </div>
      <div className='container-fluid mb-3'>
        <div className="row p-2">
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://sango.us/sites/default/files/u10/go-mun-cao-cap.jpg" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Gỗ Mun
                </h3>
                <a href="/configurator/size">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://cf.shopee.vn/file/335c97c228ec5212793ebfddca6cb96e" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Tre Già
                </h3>
                <a href="/configurator/size">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://bamboofurni.com/images/detailed/6/van-tam-tre-ghep-3-lop_js52-26.jpg" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Tre xử lí
                </h3>
                <a href="/configurator/size">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://minhmy.com.vn/wp-content/uploads/2015/12/MCT-5002-N-2.jpg" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Mây
                </h3>
                <a href="/configurator/size">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://cuagobachviet.vn/wp-content/uploads/2020/07/go-huong-huyet-la-gi-scaled.jpg" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                Hương Huyết Đỏ
                </h3>
                <a href="/configurator/size">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src="https://cf.shopee.vn/file/fe24a20414f61010108dc852bc2d59b5" alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                Inox
                </h3>
                <a href="/configurator/size">
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

export default MaterialConfigPage