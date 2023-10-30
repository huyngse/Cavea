import React, { useState, useEffect } from 'react'
import MainLayout from './MainLayout'
import { formatCurrency } from '../utils/utils'
import NavItem from '../components/NavItem'
import Cookies from 'js-cookie';

function CageConfigLayout(props) {
    function handleResetConfig() {
        Cookies.remove('selected-bird-type');
        Cookies.remove('selected-shape');
        Cookies.remove('selected-material');
        Cookies.remove('selected-height');
        Cookies.remove('selected-spoke');
    }
    const birdTypeValue = Cookies.get('selected-bird-type');
    let birdType = null;
    if (birdTypeValue != null) {
        birdType = JSON.parse(birdTypeValue);
    }
    const shapeValue = Cookies.get('selected-shape');
    let shape = null;
    if (shapeValue != null) {
        shape = JSON.parse(shapeValue);
    }
    const spokeValue = Cookies.get('selected-spoke');
    let spoke = null;
    if (spokeValue != null) {
        spoke = JSON.parse(spokeValue);
    }
    const heightValue = Cookies.get('selected-height');
    let height = null;
    if (heightValue != null) {
        height = JSON.parse(heightValue);
    }
    const materialValue = Cookies.get('selected-material');
    let material = null;
    if (materialValue != null) {
        material = JSON.parse(materialValue);
    }
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (
            birdType != null &&
            shape != null &&
            spoke != null &&
            height != null &&
            material != null
        ) {
            setTotal(
                0 +
                shape.price +
                birdType.basePrice +
                spoke.price +
                material.price +
                height.price
            );
        } else {
            setTotal(0);
        }
    }, [birdType, shape, spoke, height, material]);
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
                            {/* <NavItem href="/configurator/component">Phụ kiện</NavItem> */}
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
                            <div>
                                {birdType != null &&
                                    (<div><strong>Loại chim: </strong>{birdType.birdName}</div>
                                    )
                                }
                                {birdType == null &&
                                    (<div><strong>Loại chim: </strong>Chưa chọn</div>
                                    )
                                }
                                {birdType != null &&
                                    (<div><strong>Mức giá cơ bản: </strong>{formatCurrency(birdType.basePrice)}</div>
                                    )
                                }
                                {
                                    shape != null && (
                                        <div>
                                            <strong>Hình dáng:</strong> {shape.shape} ({formatCurrency(shape.price)})
                                        </div>
                                    )
                                }
                                {
                                    material != null && (
                                        <div>
                                            <strong>Nguyên liệu:</strong> {material.material} ({formatCurrency(material.price)})
                                        </div>
                                    )
                                }
                                {
                                    spoke != null && (
                                        <div>
                                            <strong>Số nan:</strong> {spoke.spokes} ({formatCurrency(spoke.price)})
                                        </div>
                                    )
                                }
                                {
                                    height != null && (
                                        <div>
                                            <strong>Số nan:</strong> {height.size} ({formatCurrency(height.price)})
                                        </div>
                                    )
                                }

                            </div>
                            {
                                (total === 0)
                                && (
                                    <p className='h5'>
                                        Tổng giá: chưa xác định
                                    </p>
                                )
                            }
                            {
                                (total !== 0)
                                && (
                                    <p className='h5'>
                                        Tổng giá: {formatCurrency(total)}
                                    </p>
                                )
                            }
                        </div>
                        <div className='mb-3 text-center'>
                            <a href="/configurator">
                                <button className='btn btn-primary w-100' onClick={() => handleResetConfig()}>Đặt lại thiết kế</button>
                            </a>
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