import React from "react";
import Cookies from "js-cookie";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/index.jsx";
const MainLayout = (props) => {
    const loggedInUser = Cookies.get("loggedInUser");
    const userRole = Cookies.get("userRole");

    return (
        <div className="min-vh-100 d-flex flex-column">
            {loggedInUser && userRole === "customer" ? (
                <Navbar showAvatar={true} />
            ) : (
                <Navbar showLogin={true} />
            )}
            <div className='flex-grow-1 bg-gray '>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
