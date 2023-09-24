import React, { useState } from "react";
import SignUpForm from "./signup_form.jsx";
import NavbarForHomePage from "../../Components/Navbar/index.jsx";

const SignUp = () => {
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
          <NavbarForHomePage isSearchVisible={false} login={true} />
          <SignUpForm />
        </>
      )}
    </div>
  );
};

export default SignUp;
