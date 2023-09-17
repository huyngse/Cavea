import React from "react";

import NavbarForHomePage from "../../Components/Navbar/navbar_for_home_page.jsx";
import BlogForm from "./blog_form.jsx";
import Footer from "../../Components/footer/index.jsx";

import { useAuth } from "../../AuthContext.jsx";

const BlogPage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <div>
          <p>Blog after Login {loggedInUser}!</p>
        </div>
      ) : (
        <>
          <NavbarForHomePage
            isSearchVisible={false}
            login={true}
            signUp={true}
          />
          <BlogForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default BlogPage;
