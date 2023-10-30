import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CustomOrderProvider } from './contexts/CustomOrderContext'
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
import CheckoutPage from "./pages/CheckoutPage.jsx";
import AdminManageAccountPage from "./pages/AdminPages/ManageAccountPage.jsx";
import AdminDashboardPage from "./pages/AdminPages/DashboardPage.jsx";
import AdminManageOrderPage from "./pages/AdminPages/ManageOrderPage.jsx";
import AdminCustomOrderPage from "./pages/AdminPages/CustomOrderPage.jsx";
import AdminRevenuePage from "./pages/AdminPages/RevenuePage.jsx"
import AdminOrderDetailPage from "./pages/AdminPages/OrderDetailPage.jsx"
import AdminManageProductPage from "./pages/AdminPages/ManageProductPage.jsx"
import AdminManageCategoryPage from "./pages/AdminPages/ManageCategoryPage.jsx"
import EditProfile from "./pages/AccountPage/EditProfilePage.jsx";
import UserOrder from "./pages/AccountPage/UserOrderPage.jsx";
import OrderDetailPage from "./pages/OrderDetailPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import BirdTypeConfigPage from "./pages/CageConfigPages/BirdTypeConfigPage.jsx"
import ComponentConfigPage from "./pages/CageConfigPages/ComponentConfigPage.jsx"
import ConfigSummaryPage from "./pages/CageConfigPages/ConfigSummaryPage.jsx"
import MaterialConfigPage from "./pages/CageConfigPages/MaterialConfigPage.jsx"
import ShapeConfigPage from "./pages/CageConfigPages/ShapeConfigPage.jsx"
import SizeConfigPage from "./pages/CageConfigPages/SizeConfigPage.jsx"
import ManageCloudPage from "./pages/ManageCloudPage.jsx";

import { useLocation } from "react-router";
import "./index.scss";
import "./index.css";
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

const App = () => {
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
          <CustomOrderProvider>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={isLoading ? <Loader /> : <HomePage />} />
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
                <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
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
                <Route
                  path="/admin/dashboard"
                  element={<AdminDashboardPage />}
                />
                <Route
                  path="/admin/revenue"
                  element={<AdminRevenuePage />}
                />
                <Route
                  path="/admin/manage-product"
                  element={<AdminManageProductPage />}
                />
                <Route
                  path="/admin/manage-category"
                  element={<AdminManageCategoryPage />}
                />
                <Route
                  path="/checkout"
                  element={isLoading ? <Loader /> : <CheckoutPage />}
                />
                <Route
                  path="/account"
                  element={<Navigate to="/account/profile" />}
                />
                <Route
                  path="/account/profile"
                  element={<EditProfile />}
                />
                <Route
                  path="/account/order"
                  element={<UserOrder />}
                />
                <Route
                  path="/account/custom-order"
                  element={<h1>TODO: </h1>}
                />
                <Route
                  path="/account/change-password"
                  element={<h1>TODO: </h1>}
                />
                <Route
                  path="/account/notification"
                  element={<h1>TODO: </h1>}
                />
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
                  element={<Navigate to="/configurator/bird-type" />}
                />
                <Route
                  path="/configurator/bird-type"
                  element={isLoading ? <Loader /> : <BirdTypeConfigPage />}
                />
                <Route
                  path="/configurator/shape"
                  element={isLoading ? <Loader /> : <ShapeConfigPage />}
                />
                <Route
                  path="/configurator/size"
                  element={isLoading ? <Loader /> : <SizeConfigPage />}
                />
                <Route
                  path="/configurator/material"
                  element={isLoading ? <Loader /> : <MaterialConfigPage />}
                />
                <Route
                  path="/configurator/component"
                  element={isLoading ? <Loader /> : <ComponentConfigPage />}
                />
                <Route
                  path="/configurator/summary"
                  element={isLoading ? <Loader /> : <ConfigSummaryPage />}
                />
                <Route
                  path="/manage-file"
                  element={<ManageCloudPage />}
                />
                <Route path="*" element={<img src="https://bristeeritech.com/wp-content/uploads/2020/02/Untitled-1.jpg" alt="" />} />
              </Routes>
            </ScrollToTop>
          </CustomOrderProvider>
        </CardProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
