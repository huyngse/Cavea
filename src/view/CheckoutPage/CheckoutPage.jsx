import React from "react";
import Cookies from "js-cookie";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/footer/index.jsx";
import CheckoutContent from "./CheckoutContent.jsx";

const CheckoutPage = () => {
  const loggedInUser = Cookies.get("loggedInUser");
  const userRole = Cookies.get("userRole");

  return (
    <div className="min-vh-100 d-flex flex-column">
      {loggedInUser && userRole === "customer" ? (
        <>
          <Navbar showAvatar={true} />
          <CheckoutContent />
          <Footer />
        </>
      ) : (
        <>
          <Navbar showLogin={true} showSignUp={true} />
          <CheckoutContent />
          <Footer />
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
