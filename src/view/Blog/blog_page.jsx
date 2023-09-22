import React from "react";

import Navbar from "../../Components/Navbar/index.jsx";
import BlogForm from "./blog_form.jsx";
import Footer from "../../Components/footer/index.jsx";

import { useAuth } from "../../AuthContext.jsx";

const BlogPage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <>
          <Navbar avatar={true} />
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
