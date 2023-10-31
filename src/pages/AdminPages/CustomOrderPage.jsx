import React, {useEffect, useState} from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import dayjs from "dayjs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import { Table, Select} from "antd";
import axios from 'axios';

const statusOptions = [
  {
    label: "Thành công",
    value: 1
  },
  {
    label: "Đã hủy",
    value: 2
  },
]
function AdminCustomOrderPage() {

  const [value, setValue] = React.useState("all");
  const [dataSource,setDataSource] = useState([]);
  const [dataSourceDefault,setDataSourceDefault] = useState([]);
  const handleChange = (event, value) => {
    if(value === "all") {
      setDataSource(dataSourceDefault);
    } else {
      const filter = dataSourceDefault.filter(item => item.status === value);
      setDataSource(filter);
    }
    setValue(value);
  };

  // useEffect(() => {
  //   const getCarts = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:8089/cart/bill-all');
  //       setCarts(res.data.list);
  //       console.log(res.data.list);
  //     }catch (error){
  //       console.log(error.message);
  //     }
  //   }
  //   getCarts();
  // }, []);


  const columns = [
    {
      title: 'Mã đơn',
      dataIndex: 'billId',
      key: 'billId',
    },
    {
      title: 'Khách hàng',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
    {
      title: 'Ngày giao dự kiến',
      dataIndex: 'expectedDate',
      key: 'expectedDate',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'changeStatus',
      key: 'changeStatus',
    },
  ]

  const onChangeStatus = async (event,item)=> {
    try {
      const path = `http://localhost:8089/cart/bill?username=${item.username}&billId=${item.billId}&status=${event}`;
      const response = await axios.get(path);
      console.log("response",response)
    } catch (error) {
      console.log("error",error)
    }
  };

  const onChangeInput = event => {
    const value = event.target.value;
    const filter = dataSourceDefault.filter(item => item.username.includes(value));
    setDataSource(filter)
  }

  useEffect(() => {
    setDataSource(dataSourceDefault)
  },[dataSourceDefault]);

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:8089/cart/bill-all?status=2");
      const list = response.data.list;
      const data = list.map(item => ({
        ...item,
        price: `${item.price.toLocaleString("vi-VN")} VND`,
        changeStatus: <Select key={item.id} options={statusOptions} defaultValue={item.status} onChange={(event) => onChangeStatus(event,item)} />
      }))
      setDataSourceDefault(data)
    } catch (err) {
      console.log("err",err)
    }
  }
  useEffect(() => {
    loadData()
  },[])
  const [date, setDate] = React.useState(dayjs('2022-04-17'));
  return (
      <AdminLayout>
        <div className='bg-gray w-100 p-2'>
          <div className='bg-white mb-3'>
            <h1 className='h2 text-center p-3'>Danh sách đơn đặt hàng gia công</h1>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Tất cả" value="all" />
              <Tab label="Chờ xác nhận" value={0} />
              <Tab label="Thành công" value={1} />
              <Tab label="Đã hủy" value={2} />
            </Tabs>
            <div className="px-3 py-3">
              <form className="input-group mb-3 px-5">
                <input
                    type="text"
                    className="form-control search-bar"
                    placeholder="Tìm kiếm theo tên khách hàng"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    onChange={onChangeInput}
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
          <Table
              columns={columns}
              dataSource={dataSource}
              pagination={{
                position: ["bottomCenter"],
                pageSize: 10,
                total: dataSource.length
              }}
          />
        </div>
      </AdminLayout>
  )
}

export default AdminCustomOrderPage