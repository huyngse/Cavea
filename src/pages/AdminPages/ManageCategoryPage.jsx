import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'


function ManageCategoryPage() {

    return (
        <AdminLayout>
            <div className='container-fluid bg-gray'>
                <section className='w-100 p-2'>
                    <div className='bg-white mb-3'>
                        <h1 className='h2 text-center p-3'>Danh sách các loại lồng chim</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tên loại chim</th>
                                    <th scope="col">Ảnh minh họa</th>
                                    <th scope="col">Giá cơ bản</th>
                                    <th scope="col">Thời gian cơ bản</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end p-3">
                            <button className="btn btn-primary">Thêm loại chim</button>
                        </div>
                    </div>
                </section>
                <section className='w-100 p-2'>
                    <div className='bg-white mb-3'>
                        <h1 className='h2 text-center p-3'>Danh sách hình dáng lồng</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Hình dáng</th>
                                    <th scope="col">Ảnh minh họa</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end p-3">
                            <button className="btn btn-primary">Thêm hình dáng</button>
                        </div>
                    </div>
                </section>
            </div>

        </AdminLayout>
    )
}

export default ManageCategoryPage