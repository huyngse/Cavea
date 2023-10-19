import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";

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
import AdminManageAccountPage from "./pages/AdminManageAccountPage.jsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import AdminManageOrderPage from "./pages/AdminManageOrderPage.jsx";
import AdminCustomOrderPage from "./pages/AdminCustomOrderPage.jsx";
import AdminRevenuePage from "./pages/AdminRevenuePage.jsx"
import EditProfile from "./pages/AccountPage/EditProfilePage.jsx";
import UserOrder from "./pages/AccountPage/UserOrderPage.jsx";
import OrderDetailPage from "./pages/OrderDetailPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
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
    }, 1500);

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
              <Route path="/" element={isLoading ? <Loader /> : <HomePage />} />
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
                path="/checkout"
                element={isLoading ? <Loader /> : <CheckoutPage />}
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
              <Route path="*" element={<img src="https://bristeeritech.com/wp-content/uploads/2020/02/Untitled-1.jpg" alt="" />} />
            </Routes>
          </ScrollToTop>
        </CardProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
