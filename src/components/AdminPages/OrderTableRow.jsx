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
            <td className='p-1'><button className="btn text-primary"><i class="bi bi-eye-fill"></i></button></td>
        </tr>
    )
}

export default OrderTableRow