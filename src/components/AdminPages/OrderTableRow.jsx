import React from 'react'

function OrderTableRow(props) {
    function formatCurrency(number) {
        return number.toLocaleString("vi-VN", { style: "currency", currency: "VND", });
    }
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.customer}</td>
            <td>{props.phone}</td>
            <td>{props.date}</td>
            <td>{props.expectedDate}</td>
            <td>{formatCurrency(props.cost)}</td>
            <td>
                {props.status === "chờ xác nhận" &&
                    <span className='fw-bold text-warning'>chờ xác nhận</span>
                }
                {props.status === "đang xử lí" &&
                    <span className='fw-bold text-primary'>đang xử lí</span>
                }
            </td>
            <td className='p-1'>
                <a href={props.href}>
                    <button className="btn text-primary"><i className="bi bi-eye-fill"></i></button>
                </a>
            </td>
        </tr>
    )
}

export default OrderTableRow