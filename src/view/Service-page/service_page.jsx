import React from "react";

import ServiceForm from "./service_form";
import Navbar from "../../Components/Navbar/index";

import { useAuth } from "../../AuthContext.jsx";

const ServicePage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <>
          <Navbar avatar={true} />
          <ServiceForm />
        </>
      ) : (
        <>
          <Navbar signUp={true} login={true} />
          <ServiceForm />
        </>
      )}
    </div>
  );
};

export default ServicePage;
