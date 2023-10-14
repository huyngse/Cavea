import React from "react";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar.jsx";
import background from "../assets/background.jpg";

export default function LoginLayout(props) {
  const loggedInUser = Cookies.get("loggedInUser");
  const userRole = Cookies.get("userRole");
  return (
    <div className="min-vh-100 d-flex flex-column">
      {loggedInUser && userRole === "customer" ? (
        <Navbar showAvatar={true} size="small" />
      ) : (
        <Navbar
          showSignUp={props.login === true}
          showLogin={props.signup === true}
          size="small"
        />
      )}
      <div
        className="flex-grow-1"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
