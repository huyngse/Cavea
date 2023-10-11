import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useAuth } from "../../AuthContext.jsx";

function AccountSidebar(props) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="d-flex flex-column flex-shrink-0 p-4 bg-light">
      <a href="/account/profile" className="d-flex align-items-center link-dark text-decoration-none px-3">
        <div className="object-fit-cover object-position-center rounded-circle overflow-hidden me-3" style={{ width: "64px", height: "64px" }}>
          <img src="https://cdn5.vectorstock.com/i/1000x1000/64/39/sketch-cute-sparrow-vector-3176439.jpg" alt="" className="img-fluid" />
        </div>
        <div>
          <div>
            <strong>{"shymastic"}</strong>
          </div>
          <div className='text-muted'>
            <i className="bi bi-pencil-fill  me-2"></i>
            Sửa Hồ Sơ
          </div>
        </div>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/account/profile" className={`nav-link ${location.pathname === '/account/profile' ? "active" : "link-dark"
            }`} aria-current={location.pathname === '/account/profile' ? 'page' : undefined}>
            <i className="bi bi-person-circle me-2"></i>
            Hồ sơ
          </a>
        </li>
        <li>
          <a href="/account/order" className={`nav-link ${location.pathname === '/account/order' ? "active" : "link-dark"
            }`} aria-current={location.pathname === '/account/order' ? 'page' : undefined}>
            <i className="bi bi-pass me-2"></i>
            Đơn mua
          </a>
        </li>
        <li>
          <a href="/account/custom-order" className={`nav-link ${location.pathname === '/account/custom-order' ? "active" : "link-dark"
            }`} aria-current={location.pathname === '/account/custom-order' ? 'page' : undefined}>
            <i className="bi bi-pass me-2"></i>
            Đơn mua gia công
          </a>
        </li>
        <li>
          <a href="/account/change-password" className={`nav-link ${location.pathname === '/account/change-password' ? "active" : "link-dark"
            }`} aria-current={location.pathname === '/account/change-password' ? 'page' : undefined}>
            <i className="bi bi-gear me-2"></i>
            Đổi mật khẩu
          </a>
        </li>
        <li>
          <a href="/account/notification" className={`nav-link ${location.pathname === '/account/notification' ? "active" : "link-dark"
            }`} aria-current={location.pathname === '/account/notification' ? 'page' : undefined}>
            <i className="bi bi-bell me-2"></i>
            Cài đặt thông báo
          </a>
        </li>
        <hr />

        <li>
          <button className="nav-link link-dark" onClick={handleLogout} >
            <i className="bi bi-box-arrow-right me-2"></i>
            Đăng xuất
          </button>
        </li>
      </ul>

    </div>
  )
}

export default AccountSidebar