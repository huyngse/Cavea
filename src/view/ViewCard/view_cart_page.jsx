import React, { useState } from "react";

import ViewCardForm from "./view_cart_form";
import Navbar from "../../Components/Navbar/index.jsx";
import Footer from "../../Components/footer/index.jsx";

const ViewCartPage = () => {
  const [loggedInUser] = useState(null);

  return (
    <div>
      {loggedInUser ? (
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
