import React from "react";
import AdminSideBar from "../components/AdminSideBar.jsx";

const AdminLayout = (props) => {
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-0">
          <AdminSideBar />
        </div>
        <div className="col-9 p-0">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
