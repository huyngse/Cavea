import { Button, Modal } from "@mui/material";
import { Space, Table } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import OrderDetail from "../OrderHistory/OrderDetail";
import CustomOrderDetail from "../OrderHistory/CustomOrderDetail";

function OrderTableRow(props) {
  const { dataSource } = props;
  console.log("DataSource: ", dataSource);
  const [selectedData, setSelectedData] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState({});

  const loadData = async (userData) => {
    try {
      if (!props.isCustomCage) {
        const response = await axios.get(
          `http://localhost:8089/cart/history?username=${userData.username}`
        );
        setSelectedData(
          response.data.object.filter(
            (item) => item.productId === userData.productId
          )[0]
        );
        console.log(
          "selected data: ",
          response.data.object.filter(
            (item) => item.productId === userData.productId
          )[0]
        );
      } else {
        const response = await axios.get(
          `http://localhost:8089/cart/custom/history?username=${userData.username}`
        );
        setSelectedData(
          response.data.list.filter((item) => item.id === userData.id)[0]
        );
        setUserInfo(response.data.object);
        console.log(
          "selected data: ",
          response.data.list.filter((item) => item.id === userData.id)[0]
        );
        console.log(
          "User info from Custom History Admin: ",
          response.data.object
        );
      }
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewButton = (userInfor) => {
    loadData(userInfor);
    setOpen(true);
    setSelectedRecord(userInfor);
  };

  const columns = [
    {
      title: "Mã đơn",
      dataIndex: "billId",
      key: "billId",
    },
    {
      title: "Khách hàng",
      dataIndex: "full_name",
      key: "username",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "username",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "username",
    },
    {
      title: "Ngày đặt",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Ngày giao dự kiến",
      dataIndex: "expectedDate",
      key: "expectedDate",
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Trạng thái",
      dataIndex: "changeStatus",
      key: "changeStatus",
    },
    {
      title: "",
      key: "view",
      render: (_, record) => (
        <Space size="middle">
          {record.status === 0 ? (
            <></>
          ) : (
            <Button onClick={() => handleViewButton(record)}>
              <img
                src={require("../../assets/view.png")}
                style={{ width: "3.5vh" }}
              />
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 10,
          total: dataSource.length,
        }}
      />
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setIsLoading(false);
          setSelectedData({});
          loadData(selectedRecord);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="overflow-auto"
      >
        <div className="m-5 bg-white rounded-3 overflow-hidden">
          <div className="bg-primary p-3 text-white d-flex">
            <h3 className="me-auto">Chi tiết đơn hàng</h3>
            <button className="btn btn-primary" onClick={handleClose}>
              <i class="bi bi-x-lg me-3"></i>Đóng
            </button>
          </div>

          {!isLoading ? (
            <></>
          ) : !props.isCustomCage ? (
            <OrderDetail
              id={selectedData.billId}
              fullData={selectedData}
              userInfo={userInfo}
              status={selectedRecord.status}
            />
          ) : (
            <CustomOrderDetail
              id={props.id}
              fullData={selectedData}
              userInfo={userInfo}
              status={selectedRecord.status}
            />
          )}
        </div>
      </Modal>
    </>
  );
}

export default OrderTableRow;
