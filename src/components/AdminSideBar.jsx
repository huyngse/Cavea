import React from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import Cookies from "js-cookie";
function AdminSideBar() {
    const username = Cookies.get("loggedInUser");
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light min-vh-100">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
                <span className="fs-4">Cavea</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="/admin/dashboard" className={`nav-link ${location.pathname === "/admin/dashboard" ? "active" : "link-dark"
                        }`}
                        aria-current={
                            location.pathname === "/account/profile" ? "page" : undefined
                        }>
                        <i className="bi bi-graph-up-arrow me-3"></i>
                        Thống kê
                    </a>
                </li>
                <li>
                    <a href="/admin/manage-order" className={`nav-link ${location.pathname === "/admin/manage-order" ? "active" : "link-dark"
                        }`}
                        aria-current={
                            location.pathname === "/account/profile" ? "page" : undefined
                        }>
                        <i className="bi bi-clipboard-check me-3"></i>
                        Quản lý đơn hàng
                    </a>
                </li>
                <li>
                    <a href="/admin/custom-order" className={`nav-link ${location.pathname === "/admin/custom-order" ? "active" : "link-dark"
                        }`}
                        aria-current={
                            location.pathname === "/account/profile" ? "page" : undefined
                        }>
                        <i className="bi bi-tools me-3"></i>
                        Đơn hàng gia công
                    </a>
                </li>
                <li>
                    <a href="/admin/manage-account" className={`nav-link ${location.pathname === "/admin/manage-account" ? "active" : "link-dark"
                        }`}
                        aria-current={
                            location.pathname === "/account/profile" ? "page" : undefined
                        }>
                        <i className="bi bi-people-fill me-3"></i>
                        Quản lý người dùng
                    </a>
                </li>
                <li>
                    <a href="/admin/revenue" className={`nav-link ${location.pathname === "/admin/revenue" ? "active" : "link-dark"
                        }`}
                        aria-current={
                            location.pathname === "/account/profile" ? "page" : undefined
                        }>
                        <i className="bi bi-cash-stack me-3"></i>
                        Doanh thu
                    </a>
                </li>
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