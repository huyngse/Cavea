import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from "react-router";

import { AuthProvider } from "./contexts/AuthContext.jsx";
import { CardProvider } from "./contexts/CardContext.jsx";
import Loader from "./components/Loading/index.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ServicePage from "./pages/CustomOrderPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ViewCartPage from "./pages/ViewCartPage.jsx";
import Payment from "./pages/Payment.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import AdminManageAccountPage from "./pages/AdminPages/ManageAccountPage.jsx";
import AdminDashboardPage from "./pages/AdminPages/DashboardPage.jsx";
import AdminManageOrderPage from "./pages/AdminPages/ManageOrderPage.jsx";
import AdminCustomOrderPage from "./pages/AdminPages/CustomOrderPage.jsx";
import AdminRevenuePage from "./pages/AdminPages/RevenuePage.jsx";
import AdminOrderDetailPage from "./pages/AdminPages/OrderDetailPage.jsx";
import EditProfile from "./pages/AccountPage/EditProfilePage.jsx";
import UserOrder from "./pages/AccountPage/UserOrderPage.jsx";
import OrderDetailPage from "./pages/OrderDetailPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import CageConfigPage from "./pages/CageConfigPages/CageConfigPage.jsx";
import VerifyEmailPage from "./pages/VerifyEmailPage.jsx";
import { Outlet } from "react-router-dom";

import "./index.scss";
import "./index.css";
import UserCustomOrderPage from "./pages/AccountPage/CustomerOrderPage.jsx";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
export function RequiresAuth({ children }) {
  const accessToken = localStorage.getItem("token");
  if (!accessToken) {
    return <Navigate to="/login" />;
  } else {
    return children ? children : <Outlet />;
  }
}
const App = () => {
  const accessToken = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <CardProvider>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route
                path="/home"
                element={isLoading ? <Loader /> : <HomePage />}
              />
              <Route
                path="/home:isSuccessfullyCheckout"
                element={isLoading ? <Loader /> : <HomePage />}
              />
              <Route
                path="/Cavea"
                element={isLoading ? <Loader /> : <HomePage />}
              />
              <Route
                path="/login/*"
                element={isLoading ? <Loader /> : <LoginPage />}
              />
              <Route
                path="/sign-up"
                element={isLoading ? <Loader /> : <SignUp />}
              />
              <Route
                path="/service"
                element={isLoading ? <Loader /> : <ServicePage />}
              />
              <Route
                path="/blog"
                element={isLoading ? <Loader /> : <BlogPage />}
              />
              <Route
                path="/compare"
                element={isLoading ? <Loader /> : <ComparePage />}
              />
              <Route
                path="/product-detail/:productId"
                element={isLoading ? <Loader /> : <ProductDetailPage />}
              />
              <Route
                path="/view-cart"
                element={isLoading ? <Loader /> : <ViewCartPage />}
              />
              <Route
                path="/payment-vnpay/results"
                element={isLoading ? <Loader /> : <Payment />}
              />

              <Route
                path="/admin"
                element={<Navigate to="/admin/dashboard" />}
              />
              <Route
                path="/admin/manage-account"
                element={<AdminManageAccountPage />}
              />
              <Route
                path="/admin/manage-order"
                element={<AdminManageOrderPage />}
              />
              <Route
                path="/admin/order-detail"
                element={<AdminOrderDetailPage />}
              />
              <Route
                path="/admin/custom-order"
                element={<AdminCustomOrderPage />}
              />
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              <Route path="/admin/revenue" element={<AdminRevenuePage />} />
              <Route
                path="/checkout"
                element={isLoading ? <Loader /> : <CheckoutPage />}
              />
              <Route
                path="/account"
                element={<Navigate to="/account/profile" />}
              />
              <Route path="/account/profile" element={<EditProfile />} />
              <Route path="/account/order" element={<UserOrder />} />
              <Route
                path="/account/custom-order"
                element={<UserCustomOrderPage />}
              />
              <Route
                path="/account/change-password"
                element={<h1>TODO: </h1>}
              />
              <Route
                path="/verify-email"
                element={isLoading ? <Loader /> : <VerifyEmailPage />}
              />

              <Route path="/account/notification" element={<h1>TODO: </h1>} />
              <Route
                path="/order-detail"
                element={isLoading ? <Loader /> : <OrderDetailPage />}
              />
              <Route
                path="/search"
                element={isLoading ? <Loader /> : <SearchPage />}
              />
              <Route
                path="/configurator"
                element={isLoading ? <Loader /> : <CageConfigPage />}
              />
              <Route
                path="*"
                element={
                  <img
                    src="https://bristeeritech.com/wp-content/uploads/2020/02/Untitled-1.jpg"
                    alt=""
                  />
                }
              />
            </Routes>
          </ScrollToTop>
        </CardProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
