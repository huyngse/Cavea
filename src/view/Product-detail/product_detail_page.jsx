import React from "react";

import ProductDetailForm from "./product_detail_form";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/index.jsx";

import { useAuth } from "../../AuthContext.jsx";

const ProductDetailPage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
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
