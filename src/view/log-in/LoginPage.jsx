import React, { useState } from "react";
import LoginForm from "./LoginForm";

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
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default LoginPage;
