import React from 'react'
import Rating from '@mui/material/Rating';
function formatCurrency(number) {
    return number.toLocaleString("vi-VN", { style: "currency", currency: "VND", });
}
function SmallProductCard(props) {
    return (
        <div className='col-3 mb-3'>
            <div className='bg-white sm-product-card p-1 position-relative'>
                <a href={props.href} className='text-dark text-decoration-none'>
                    <div className='ratio ratio-1x1'>
                        <img src={props.image} alt="" className='w-100 h-100' />
                    </div>
                    <h3 className='h6 overflow-hidden mb-0' style={{ height: "39px", textOverflow: "ellipsis" }}>
                        {props.name}
                    </h3>
                </a>
                <div className='h5 text-primary'>{formatCurrency(props.discount)}</div>
                <div className='d-flex align-items-center small text-muted'>
                    <div className='me-1'>
                        357 đã bán |
                    </div>
                    <Rating name="size-small" defaultValue={props.rating} size="small" readOnly />
                    (188)
                </div>

                <div className="dropdown position-absolute top-0 end-0 m-2 hidden-hover">
                    <button className="btn card-menu p-1 rounded-circle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="d-flex align-items-center justify-content-center" style={{ width: "22px", height: "22px" }}>
                            <i className="bi bi-three-dots-vertical"></i>
                        </div>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <button className="dropdown-item" >
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" value="" id={"flexCheckDefault" + props.id} />
                                    <label className="form-check-label" htmlFor={"flexCheckDefault" + props.id}>
                                        So sánh
                                    </label>
                                </div>
                            </button>
                        </li>
                        <hr className="dropdown-divider"></hr>
                        <li><button className="dropdown-item" >Thêm vào giỏ</button></li>
                        <li><button className="dropdown-item" >Mua ngay</button></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SmallProductCard