import * as React from 'react';

export default function OrderItem(props) {
    return (
        <>
            <hr />
            <div className='row'>
                <div className="col-9">
                    <div className='d-flex'>
                        <div className='overflow-hidden me-3' style={{ width: "100px", height: "100px" }}>
                            <img src={props.image} alt='order item' className='img-fluid'></img>
                        </div>
                        <div>
                            <h4 className='h6'>{props.name}</h4>
                            <div className='text-muted'><small>Loại lồng: {props.type}</small></div>
                            <div><small>x{props.quantity}</small></div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='mt-3'>
                        <small className='me-3'>
                            <span className='text-decoration-line-through text-muted'>{props.price.toLocaleString("vi-VN", { style: "currency", currency: "VND", })}</span>
                        </small>
                        <span className='text-primary'>{props.discount.toLocaleString("vi-VN", { style: "currency", currency: "VND", })}</span>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )

}