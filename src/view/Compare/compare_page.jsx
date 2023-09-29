import React from "react";

import Navbar from "../../Components/Navbar/index.jsx";
import CompareForm from "./compare_form.jsx";
import Footer from "../../Components/footer/index.jsx";

import { useAuth } from "../../AuthContext.jsx";

const BlogPage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <>
          <Navbar avatar={true} />
          <CompareForm sx={{ textAlign: "center" }} />
          <Footer />
        </>
      ) : (
        <>
          <Navbar login={true}  />
          <CompareForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default BlogPage;
