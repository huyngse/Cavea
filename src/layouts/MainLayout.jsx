import React from "react";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
const MainLayout = (props) => {
    const loggedInUser = Cookies.get("loggedInUser");
    const userRole = Cookies.get("userRole");

    return (
        <div className="min-vh-100 d-flex flex-column">
            {loggedInUser && userRole === "customer" ? (
                <Navbar showAvatar={true} />
            ) : (
                <Navbar showLogin={true} showSignUp={true}/>
            )}
            <div className='flex-grow-1'>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
