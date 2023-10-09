import React from "react";
import Cookies from "js-cookie";

import ServiceForm from "./service_form";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/index.jsx";

const ServicePage = () => {
  const loggedInUser = Cookies.get("loggedInUser");
  const userRole = Cookies.get("userRole");

  return (
    <div>
      {loggedInUser && userRole === "customer" ? (
        <>
          <Navbar avatar={true} showAvatar={true} />
          <ServiceForm />
          <Footer />
        </>
      ) : (
        <>
          <Navbar signUp={true} login={true} />
          <ServiceForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ServicePage;
