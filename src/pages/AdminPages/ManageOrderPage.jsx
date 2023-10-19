import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import OrderTableRow from '../../components/AdminPages/OrderTableRow';
import dayjs from 'dayjs';


function AdminManageOrderPage() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [date, setDate] = React.useState(dayjs('2022-04-17'));
  return (
    <AdminLayout>
      <div className='bg-gray w-100 p-2'>
        <div className='bg-white mb-3'>
          <h1 className='h2 text-center p-3'>Danh sách đơn đặt hàng</h1>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Tất cả" />
            <Tab label="Chờ xác nhận" />
            <Tab label="Thành công" />
            <Tab label="Đã hủy" />
          </Tabs>
          <div className="px-3 py-3">
            <form className="input-group mb-3 px-5">
              <input
                type="text"
                className="form-control search-bar"
                placeholder="Tìm kiếm theo tên khách hàng"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-light"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
            <div className='d-flex justify-content-center'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker label="Từ ngày" defaultValue={dayjs('2022-04-17')} />
                  <DatePicker
                    label="Đến ngày"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Mã đơn</th>
              <th scope="col">Khách hàng</th>
              <th scope="col">Điện thoại</th>
              <th scope="col">Ngày đặt</th>
              <th scope="col">Ngày giao dự kiến</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Trạng thái</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <OrderTableRow
              id={12}
              customer="Trần Thị Mận"
              phone="098473932"
              date="16/10/2023"
              expectedDate=""
              cost={500000}
              status="chờ xác nhận"
            />
            <OrderTableRow
              id={13}
              customer="Trần Thị Mận"
              phone="098473932"
              date="17/10/2023"
              expectedDate="24/10/2023"
              cost={760000}
              status="đang xử lí"
            />
            <OrderTableRow
              id={14}
              customer="Trần Thị Mận"
              phone="098473932"
              date="19/10/2023"
              expectedDate=""
              cost={1200000}
              status="chờ xác nhận"
            />
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default AdminManageOrderPage