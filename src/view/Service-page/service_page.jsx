import React from "react";

import ServiceForm from "./service_form";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/footer/index.jsx";

import { useAuth } from "../../AuthContext.jsx";

const ServicePage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <>
          <Navbar avatar={true} />
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
