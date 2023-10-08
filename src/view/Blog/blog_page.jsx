import React from "react";

import Navbar from "../../Components/Navbar/Navbar.jsx";
import BlogForm from "./blog_form.jsx";
import Footer from "../../Components/footer/index.jsx";

import Cookies from "js-cookie";

const BlogPage = () => {
  const loggedInUser = Cookies.get("loggedInUser");
  const userRole = Cookies.get("userRole");

  return (
    <div>
      {loggedInUser && userRole === "customer" ? (
        <>
          <Navbar showAvatar={true} />
          <BlogForm />
          <Footer />
        </>
      ) : (
        <>
          <Navbar login={true} signUp={true} />
          <BlogForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default BlogPage;
