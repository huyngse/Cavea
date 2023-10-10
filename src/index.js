import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { AuthProvider } from "./AuthContext.jsx";
import { CardProvider } from "./CardContext.jsx";
import Loader from "./Components/Loading/index.jsx";
import Index from "./view/index";
import Login from "./view/Login/login_page.jsx";
import SignUp from "./view/SignUp/signup_page.jsx";
import BlogPage from "./view/Blog/blog_page.jsx";
import ServicePage from "./view/Service-page/service_page.jsx";
import ComparePage from "./view/Compare/compare_page.jsx";
import ProductDetailPage from "./view/Product-detail/product_detail_page.jsx";
import ViewCartPage from "./view/ViewCart/view_cart_page.jsx";
import CheckoutPage from "./view/CheckoutPage/CheckoutPage.jsx";
import ScrollToTop from "./scroll-to-top.jsx";
import "./index.scss";
import AdminPage from "./view/Admin/admin_form.jsx";
import MainLayout from "./view/Layout/MainLayout.jsx"
import AccountLayout from "./view/Layout/AccountLayout.jsx"
import EditProfile from "./view/AccountPage/EditProfile.jsx";

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
              <Route path="/" element={isLoading ? <Loader /> : <Index />} />
              <Route
                path="/login/*"
                element={isLoading ? <Loader /> : <Login />}
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
                path="view-cart"
                element={isLoading ? <Loader /> : <ViewCartPage />}
              />
              <Route
                path="/admin"
                element={isLoading ? <Loader /> : <AdminPage />}
              />
               <Route
                path="/checkout"
                element={isLoading ? <Loader /> : <CheckoutPage />}
              />
               <Route
                path="account/profile"
                element={isLoading ? <Loader /> : <MainLayout><AccountLayout><EditProfile/></AccountLayout></MainLayout>}
              />
              <Route
                path="account/order"
                element={isLoading ? <Loader /> : <MainLayout><AccountLayout><h1>TODO: </h1></AccountLayout></MainLayout>}
              />
              <Route
                path="account/change-password"
                element={isLoading ? <Loader /> : <MainLayout><AccountLayout><h1>TODO: </h1></AccountLayout></MainLayout>}
              />
              <Route
                path="account/notification"
                element={isLoading ? <Loader /> : <MainLayout><AccountLayout><h1>TODO: </h1></AccountLayout></MainLayout>}
              />
              
              <Route path="*" element={<img src="https://bristeeritech.com/wp-content/uploads/2020/02/Untitled-1.jpg" alt=""/>} />
            </Routes>
          </ScrollToTop>
        </CardProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
