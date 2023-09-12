import React, { useState } from "react";
import LoginForm from "./signup_from";
import NavbarForHomePage from "../../Components/Navbar/navbar_for_home_page";

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
          <NavbarForHomePage isSearchVisible={false} />
          <LoginForm onLogin={handleLogin} />
        </>
      )}
    </div>
  );
};

export default LoginPage;
