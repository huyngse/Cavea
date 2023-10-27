import React from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import Cookies from "js-cookie";
import NavItem from "./NavItem.jsx"
function AdminSideBar() {
    const username = Cookies.get("loggedInUser");
    const location = useLocation();
    const currentURL = location.pathname;
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="d-flex flex-column flex-shrink-0 py-3 px-1 bg-light min-vh-100" style={{ width: "250px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
                <span className="fs-4">Cavea</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <NavItem href="/admin/dashboard"><i className="bi bi-graph-up-arrow me-2"></i> Thống kê</NavItem>
                <NavItem href="/admin/manage-order"><i className="bi bi-clipboard-check me-2"></i> Quản lý đơn hàng</NavItem>
                <NavItem href="/admin/custom-order"><i className="bi bi-tools me-2"></i> Đơn hàng gia công</NavItem>
                <NavItem href="/admin/manage-account"><i className="bi bi-people-fill me-2"></i> Quản lý người dùng</NavItem>
                <NavItem href="/admin/manage-product"><i className="bi bi-box-seam me-2"></i> Quản lý sản phẩm</NavItem>
                <NavItem href="/admin/manage-category"><i className="bi bi-inboxes me-2"></i> Quản lý danh mục</NavItem>
                <NavItem href="/admin/revenue"><i className="bi bi-cash-stack me-2"></i> Doanh thu</NavItem>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="/admin/revenue" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>{username}</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button></li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSideBar