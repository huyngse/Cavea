import React from "react";
import Cookies from "js-cookie";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import CompareForm from "./compare_form.jsx";
import Footer from "../../Components/footer/index.jsx";

const BlogPage = () => {
  const loggedInUser = Cookies.get("loggedInUser");
  const userRole = Cookies.get("userRole");

  return (
    <div>
      {loggedInUser && userRole === "customer" ? (
        <>
          <Navbar showAvatar={true} />
          <CompareForm sx={{ textAlign: "center" }} />
          <Footer />
        </>
      ) : (
        <>
          <Navbar showLogin={true} showSignUp={true} />
          <CompareForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default BlogPage;
