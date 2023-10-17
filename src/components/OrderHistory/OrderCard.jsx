import React from 'react'
import Modal from '@mui/material/Modal';
import OrderDetail from './OrderDetail';
export default function OrderCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='bg-white p-3 mb-3'>
            <div className='d-flex'>
                <h3 className='h5 me-auto'>{props.name}</h3>
                <div className='text-primary text-uppercase'><small>{props.status}</small></div>
            </div>
            <div>
                {props.children}
            </div>
            <div className='d-flex justify-content-end align-items-center mb-3'>
                Thành tiền: <h4 className='text-primary ms-3'>{props.total.toLocaleString("vi-VN", { style: "currency", currency: "VND", })}</h4>
            </div>
            <div className='d-flex'>
                {/* ################# */}
                {/* CHI TIẾT ĐƠN HÀNG */}
                {/* ################# */}
                <button className='ms-auto btn btn-outline-primary me-3' onClick={handleOpen}>Xem chi tiết</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='overflow-auto'
                >
                    <div className='m-5 bg-white rounded-3 overflow-hidden'>
                        <div className='bg-primary p-3 text-white d-flex'>
                            <h3 className='me-auto'>Chi tiết đơn hàng</h3>
                            <button className='btn btn-primary' onClick={handleClose}><i class="bi bi-x-lg me-3"></i>Đóng</button>
                        </div>
                        <OrderDetail id="1" />
                    </div>

                </Modal>
                <button className='btn btn-primary'>Mua lại</button>
            </div>
        </div>
    )
}
