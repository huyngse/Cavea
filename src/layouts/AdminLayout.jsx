import React from "react";
import AdminSideBar from "../components/AdminSideBar.jsx";

const AdminLayout = (props) => {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <AdminSideBar />
        {props.children}
      </div>
    </div>
  );
};

export default AdminLayout;
