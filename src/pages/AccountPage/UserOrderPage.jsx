import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import OrderCard from "../../components/OrderHistory/OrderCard";
import OrderItem from "../../components/OrderHistory/OrderItem";
import AccountLayout from "../../layouts/AccountLayout";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { List, ListItem, Pagination, Stack, Typography } from "@mui/material";
import usePagination from "./Pagination";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const valueMapping = {
  0: "Chờ xác nhận",
  1: "Thành công",
  2: "Đã hủy",
  3: "Đang giao",
  4: "Đã giao",
};

export default function UserOrderPage() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [firstData, setFirstData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [thirdData, setThirdData] = useState([]);
  const [fourthData, setFourthData] = useState([]);
  const [zerothData, setZerothData] = useState([]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count0 = Math.ceil(zerothData.length / PER_PAGE);
  const _DATA0 = usePagination(zerothData, PER_PAGE);
  const handlePaginationChange0 = (e, p, data) => {
    setPage(p);
    _DATA0.jump(p);
  };

  const count1 = Math.ceil(firstData.length / PER_PAGE);
  const _DATA1 = usePagination(firstData, PER_PAGE);
  const handlePaginationChange1 = (e, p, data) => {
    setPage(p);
    _DATA1.jump(p);
  };

  const count2 = Math.ceil(secondData.length / PER_PAGE);
  const _DATA2 = usePagination(secondData, PER_PAGE);
  const handlePaginationChange2 = (e, p, data) => {
    setPage(p);
    _DATA2.jump(p);
  };

  const count3 = Math.ceil(thirdData.length / PER_PAGE);
  const _DATA3 = usePagination(thirdData, PER_PAGE);
  const handlePaginationChange3 = (e, p, data) => {
    setPage(p);
    _DATA3.jump(p);
  };

  const count4 = Math.ceil(fourthData.length / PER_PAGE);
  const _DATA4 = usePagination(fourthData, PER_PAGE);
  const handlePaginationChange4 = (e, p, data) => {
    setPage(p);
    _DATA4.jump(p);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const loginUser = Cookies.get("loggedInUser");
    const loadData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8089/cart/history?username=${loginUser}`
        );
        setData(response.data.object);
        setZerothData(response.data.object.filter((item) => item.status === 0));
        setFirstData(response.data.object.filter((item) => item.status === 1));
        setSecondData(response.data.object.filter((item) => item.status === 2));
        setThirdData(response.data.object.filter((item) => item.status === 3));
        setFourthData(response.data.object.filter((item) => item.status === 4));
        console.log("Data from History: ", response.data.object);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <AccountLayout>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="mb-3">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="basic tabs example"
            className="bg-light"
            centered
          >
            <Tab label="Chờ xác nhận" {...a11yProps(0)} />
            <Tab label="Thành công" {...a11yProps(1)} />
            <Tab label="Đã hủy" {...a11yProps(2)} />
            <Tab label="Đang giao" {...a11yProps(3)} />
            <Tab label="Đã giao" {...a11yProps(4)} />
          </Tabs>
        </Box>
        {/* <div className="input-group mb-3 border-0">
                        <button className="input-group-text rounded-0" id="basic-addon1"><i className="bi bi-search"></i></button>
                        <input type="text" className='form-control rounded-0 py-2' placeholder='Bạn có thể tìm kiếm theo tên sản phẩm hoặc ID đơn hàng ' />
                    </div> */}
        {/* tất cả */}
        <CustomTabPanel value={value} index={0}>
          <List spacing={2}>
            {_DATA0.currentData().map((item) => {
              console.log("UserOrder status: ", item.status);

              return (
                <OrderCard
                  key={item.id}
                  // index={item.status}
                  name={
                    item.billId === null
                      ? "Chưa hoàn thành"
                      : `Mã đơn hàng: ${item.billId}`
                  }
                  status={item.status}
                  total={item.totalPrice * item.numberOfSelectedItems}
                  fullData={item}
                >
                  <OrderItem
                    image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                    name={item.cage_name}
                    type="Lồng chim họa mi"
                    discount={item.cage_price - item.cage_price * item.discount}
                    price={item.cage_price}
                    quantity={item.numberOfSelectedItems}
                  />
                </OrderCard>
              );
            })}
          </List>
          <Pagination
            count={count0}
            shape="rounded"
            onChange={handlePaginationChange0}
            page={page}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <List spacing={2}>
            {_DATA1.currentData().map((item) => {
              return (
                <OrderCard
                  key={item.id}
                  // index={item.status}
                  name={
                    item.billId == null
                      ? "Chưa hoàn thành"
                      : `Mã đơn hàng: ${item.billId}`
                  }
                  status={item.status}
                  total={item.totalPrice * item.numberOfSelectedItems}
                  fullData={item}
                >
                  <OrderItem
                    image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                    name={item.cage_name}
                    type="Lồng chim họa mi"
                    discount={item.cage_price - item.cage_price * item.discount}
                    price={item.cage_price}
                    quantity={item.numberOfSelectedItems}
                  />
                </OrderCard>
              );
            })}
          </List>
          <Pagination
            count={count1}
            shape="rounded"
            onChange={handlePaginationChange1}
            page={page}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <List spacing={2}>
            {_DATA2.currentData().map((item) => {
              return (
                <OrderCard
                  key={item.id}
                  // index={item.status}
                  name={
                    item.billId == null
                      ? "Chưa hoàn thành"
                      : `Mã đơn hàng: ${item.billId}`
                  }
                  status={item.status}
                  total={item.totalPrice * item.numberOfSelectedItems}
                  fullData={item}
                >
                  <OrderItem
                    image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                    name={item.cage_name}
                    type="Lồng chim họa mi"
                    discount={item.cage_price - item.cage_price * item.discount}
                    price={item.cage_price}
                    quantity={item.numberOfSelectedItems}
                  />
                </OrderCard>
              );
            })}
          </List>
          <Pagination
            count={count2}
            shape="rounded"
            onChange={handlePaginationChange2}
            page={page}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <List spacing={2}>
            {_DATA3.currentData().map((item) => {
              return (
                <OrderCard
                  key={item.id}
                  // index={item.status}
                  name={
                    item.billId == null
                      ? "Chưa hoàn thành"
                      : `Mã đơn hàng: ${item.billId}`
                  }
                  status={item.status}
                  total={item.totalPrice * item.numberOfSelectedItems}
                  fullData={item}
                >
                  <OrderItem
                    image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                    name={item.cage_name}
                    type="Lồng chim họa mi"
                    discount={item.cage_price - item.cage_price * item.discount}
                    price={item.cage_price}
                    quantity={item.numberOfSelectedItems}
                  />
                </OrderCard>
              );
            })}
          </List>
          <Pagination
            count={count3}
            shape="rounded"
            onChange={handlePaginationChange3}
            page={page}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <List spacing={2}>
            {_DATA4.currentData().map((item) => {
              return (
                <OrderCard
                  key={item.id}
                  // index={item.status}
                  name={
                    item.billId == null
                      ? "Chưa hoàn thành"
                      : `Mã đơn hàng: ${item.billId}`
                  }
                  status={item.status}
                  total={item.totalPrice * item.numberOfSelectedItems}
                  fullData={item}
                >
                  <OrderItem
                    image="https://www.sieuthilongchim.net//img/webroot/upload/image/files/z3499916531542_b5a4c3b50ec285e71f530bc901c35438.jpg"
                    name={item.cage_name}
                    type="Lồng chim họa mi"
                    discount={item.cage_price - item.cage_price * item.discount}
                    price={item.cage_price}
                    quantity={item.numberOfSelectedItems}
                  />
                </OrderCard>
              );
            })}
          </List>
          <Pagination
            count={count4}
            shape="rounded"
            onChange={handlePaginationChange4}
            page={page}
          />
        </CustomTabPanel>
      </Box>
    </AccountLayout>
  );
}
