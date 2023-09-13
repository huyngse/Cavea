import React, { useState } from "react";
import LoginForm from "./login_form";
import NavbarForHomePage from "../../Components/Navbar/navbar_for_home_page";
import Loader from "../../Components/Loader";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    // This is where you update the login state
    setLoggedInUser(username);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <p>Hello, {loggedInUser}!</p>
          {/* Add logout button and logic here if needed */}
        </div>
      ) : (
        <>
          {/* <Loader></Loader> */}
          <NavbarForHomePage isSearchVisible={false} signUp={true} />
          <LoginForm onLogin={handleLogin} />
        </>
      )}
    </div>
  );
};

export default LoginPage;
