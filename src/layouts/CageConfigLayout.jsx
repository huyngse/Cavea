import React from 'react'
import MainLayout from './MainLayout'
import { formatCurrency } from '../utils/utils'
import NavItem from '../components/NavItem'

function CageConfigLayout(props) {
    return (
        <MainLayout>
            <div className='mb-3'>
                <h1 className='h2 p-3 text-primary text-center'>
                    Thiết kế lồng chim theo yêu cầu
                </h1>
                <div className="shadow">
                    <header className="d-flex justify-content-center py-3">
                        <ul className="nav nav-pills">
                            <NavItem href="/configurator/bird-type">Loại chim</NavItem>
                            <NavItem href="/configurator/shape">Hình dáng</NavItem>
                            <NavItem href="/configurator/material">Nguyên liệu</NavItem>
                            <NavItem href="/configurator/size">Kích thước</NavItem>
                            <NavItem href="/configurator/component">Phụ kiện</NavItem>
                            <NavItem href="/configurator/summary">Tổng cộng</NavItem>
                        </ul>
                    </header>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-8">
                        {props.children}
                    </div>
                    <div className="col-4">
                        <div className='p-3'>
                            <h2 className='h4 text-center'>
                                Mẫu lồng của bạn
                            </h2>
                            <p>
                                <strong>Loại chim: </strong>chào mào
                                <br />
                                <strong>Hình dáng: </strong>Vuông
                                <br />
                                <strong>Kích thước: </strong>
                                <br />
                                <strong>Số nan: </strong>52
                                <br />
                                <strong>Mức giá cơ bản: </strong>{formatCurrency(1000000)}
                            </p>
                            <p className='h5'>
                                Giá hiện tại: chưa xác định
                            </p>
                        </div>
                        <div className='mb-3 text-center'>
                            <button className='btn btn-primary w-100'>Đặt lại thiết kế</button>
                        </div>
                        <div className='m-3 border border-danger text-danger p-3'>
                            Giá sẽ được xác định sau khi chọn loại chim, hình dáng, nguyên liệu và kích thước
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default CageConfigLayout