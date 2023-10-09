import React from "react";
import Cookies from "js-cookie";

import ViewCardForm from "./view_cart_form";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/footer/index.jsx";

const ViewCartPage = () => {
  const loggedInUser = Cookies.get("loggedInUser");
  const userRole = Cookies.get("userRole");

  return (
    <div>
      {loggedInUser && userRole === "customer" ? (
        <>
          <Navbar avatar={true} />
          <ViewCardForm />
          <Footer />
        </>
      ) : (
        <>
          <Navbar isSearchVisible={false} login={true} />
          <ViewCardForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ViewCartPage;
