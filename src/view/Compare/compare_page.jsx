import React from "react";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import CompareForm from "./compare_form.jsx";
import Footer from "../../Components/footer/index.jsx";

import { useAuth } from "../../AuthContext.jsx";

const BlogPage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <>
          <Navbar showAvatar={true} />
          <CompareForm sx={{ textAlign: "center" }} />
          <Footer />
        </>
      ) : (
        <>
          <Navbar showLogin={true} showSignUp={true}/>
          <CompareForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default BlogPage;
