import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import OrderTableRow from "../../components/AdminPages/OrderTableRow";
import dayjs from "dayjs";
import axios from "axios";
import { Table, Select, Space } from "antd";
import { Button } from "@mui/material";

const statusOptions = [
  {
    label: "Chờ xác nhận",
    value: 0,
  },
  {
    label: "Thành công",
    value: 1,
  },
  {
    label: "Đã hủy",
    value: 2,
  },
  {
    label: "Đang giao",
    value: 3,
  },
  {
    label: "Đã giao",
    value: 4,
  },
];
function AdminCustomOrderPage() {
  const [value, setValue] = React.useState("all");
  const [dataSource, setDataSource] = useState([]);
  const [dataSourceDefault, setDataSourceDefault] = useState([]);
  const [displayDetail, setDisplayDetail] = useState(false);
  const [filterData, setFilterData] = useState([{}]);
  const [orderIds, setOrderIds] = useState([]);

  const handleChange = (event, value) => {
    if (value === "all") {
      setDataSource(dataSourceDefault);
    } else {
      const filter = dataSourceDefault.filter((item) => item.status === value);
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

  const onChangeStatus = async (event, item) => {
    try {
      const path = `http://localhost:8089/cart/change-status?username=${item.username}&cartID=${item.id}&status=${event}`;
      const response = await axios.get(path);
      window.location.reload(false);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleViewClick = (billId) => {
    console.log("DataSource", dataSourceDefault);
    setFilterData(dataSourceDefault.filter((item) => item.billId === billId));
    console.log(filterData);
    setDisplayDetail(true);
  };

  // const columns = [
  //   {
  //     title: 'Mã đơn',
  //     dataIndex: '',
  //     key: 'billId',
  //   },
  //   // {
  //   //     title: 'Số lượng',
  //   //     dataIndex: 'quantity',
  //   //     key: 'quantity',
  //   // },
  //   {
  //     title: '',
  //     key: 'toggle',
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <Button onClick={() => handleViewClick(record)}>
  //           <img src={require("../../assets/view.png")} style={{ width: "3.5vh" }} />
  //         </Button>
  //       </Space>
  //     ),
  //   },

  // ];

  const onChangeInput = (event) => {
    const value = event.target.value;
    const filter = dataSourceDefault.filter((item) =>
      item.username.includes(value)
    );
    setDataSource(filter);
  };

  const loadData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8089/cart/bill-all/product-custom"
      );
      const list = response.data.list;
      setDataSourceDefault(list);
      const data = list.map((item) => ({
        ...item,
        totalPrice: `${item.price?.toLocaleString("vi-VN")} VND`,
        changeStatus: (
          <Select
            key={item.id}
            options={statusOptions}
            defaultValue={item.status}
            onChange={(event) => onChangeStatus(event, item)}
          />
        ),
      }));
      console.log("list", list);
      setDataSourceDefault(data);
      var tmpIdSet = new Set();
      data.map((item) => tmpIdSet.add(item.billId));
      setOrderIds(Array.from(tmpIdSet));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setDataSource(dataSourceDefault);
  }, [dataSourceDefault]);

  useEffect(() => {
    loadData();
  }, []);

  const [date, setDate] = React.useState(dayjs("2022-04-17"));
  return (
    <AdminLayout>
      <div className="bg-gray w-100 p-2">
        <div className="bg-white mb-3">
          <h1 className="h2 text-center p-3">Danh sách đơn đặt hàng</h1>
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
            <div className="d-flex justify-content-center">
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker label="Từ ngày" defaultValue={dayjs('2022-04-17')} />
                  <DatePicker
                    label="Đến ngày"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider> */}
            </div>
          </div>
        </div>
        <OrderTableRow isCustomCage={true} dataSource={dataSourceDefault} />
      </div>
    </AdminLayout>
  );
}

export default AdminCustomOrderPage;
