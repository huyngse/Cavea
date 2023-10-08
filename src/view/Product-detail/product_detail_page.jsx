import React from "react";
import Cookies from "js-cookie";

import ProductDetailForm from "./product_detail_form";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/index.jsx";

const ProductDetailPage = () => {
  const loggedInUser = Cookies.get("loggedInUser");
  const userRole = Cookies.get("userRole");

  return (
    <div>
      {loggedInUser && userRole === "customer" ? (
        <>
          <Navbar showAvatar={true} />
          <ProductDetailForm />
          <Footer />
        </>
      ) : (
        <>
          <Navbar showLogin={true} />
          <ProductDetailForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
