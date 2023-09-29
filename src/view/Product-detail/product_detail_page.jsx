import React from "react";

import ProductDetailForm from "./product_detail_form";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/footer/index.jsx";

import { useAuth } from "../../AuthContext.jsx";

const ProductDetailPage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <>
          <Navbar avatar={true} />
          <ProductDetailForm />
          <Footer />
        </>
      ) : (
        <>
          <Navbar login={true} />
          <ProductDetailForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
