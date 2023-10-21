import React from 'react'
import CageConfigLayout from '../../layouts/CageConfigLayout'
import chimCuGay from "../../assets/Bird-photos/chim-cu-gay.jpg";
import chimHoaMi from "../../assets/Bird-photos/chim-hoa-mi.jpg";
import chimChaoMao from "../../assets/Bird-photos/chim-chao-mao.jpg";
import chimKhuyen from "../../assets/Bird-photos/chim-khuyen.jpg";
import chimChoeThan from "../../assets/Bird-photos/chim-choe-than.jpg";
import chimKhuou from "../../assets/Bird-photos/chim-khuou.jpg";
import chimHutMat from "../../assets/Bird-photos/chim-hut-mat.jpg";
import chimChoeLua from "../../assets/Bird-photos/chim-chich-choe-lua.jpg";
const BirdTypeConfigPage = () => {
  return (
    <CageConfigLayout>
      <div className="p-2">
        <h1 className="h3">Chọn loại chim</h1>
      </div>
      <div className='container-fluid mb-3'>
        <div className="row p-2">
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src={chimCuGay} alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Chim Cu Gáy
                </h3>
                <a href="/configurator/shape">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src={chimHoaMi} alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Chim Họa Mi
                </h3>
                <a href="/configurator/shape">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src={chimChaoMao} alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Chim Chào Mào
                </h3>
                <a href="/configurator/shape">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src={chimKhuyen} alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Chim Khuyên
                </h3>
                <a href="/configurator/shape">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src={chimChoeThan} alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Chim Chòe Than
                </h3>
                <a href="/configurator/shape">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src={chimKhuou} alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Chim Khướu
                </h3>
                <a href="/configurator/shape">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src={chimHutMat} alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Chim Hút Mật
                </h3>
                <a href="/configurator/shape">
                  <button className="btn btn-primary mb-3">Chọn</button>
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='rounded shadow'>
              <div className='p-2 overflow-hidden' style={{ height: "200px" }}>
                <img src={chimChoeLua} alt="" className='h-100 w-100 object-fit-cover' />
              </div>
              <div className='text-center'>
                <h3 className='h5'>
                  Chim Chòe Lửa
                </h3>
                <a href="/configurator/shape">
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

export default BirdTypeConfigPage