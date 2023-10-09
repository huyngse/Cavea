import React, { useState, useRef, useEffect } from "react";
import Cookies from "js-cookie";

import Navbar from "../Components/Navbar/Navbar.jsx";
import Header from "../Components/Header-section/HeaderSection.jsx";
import ListCart from "../Components/List-cart/index.jsx";
import TitleBar from "../Components/Title-bar/index.jsx";
import Footer from "../Components/footer/index.jsx";
import BackToTopButton from "../Components/BackToHome/index.jsx";
import { products } from "../Components/List-cart/list_product.jsx";
import { useCart } from "../CardContext.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Index = () => {
  const mainRef = useRef(null);

  const { handleCompareClick, compareProducts } = useCart();
  const [compareDetails, setCompareProductDetails] = useState([]);

  useEffect(() => {
    if (compareProducts.length >= 0) {
      const compareDetails = products.filter((product) =>
        compareProducts.includes(product.id)
      );
      setCompareProductDetails(compareDetails);
    }
  }, [compareProducts]);

  const message = "Bạn đã chọn: " + compareDetails.length;

  const loggedInUser = Cookies.get("loggedInUser");
  const userRole = Cookies.get("userRole");
  return (
    <>
      <main ref={mainRef}></main>
      {loggedInUser && userRole === "customer" ? (
        <Navbar showAvatar={true} />
      ) : (
        <Navbar isSearchVisible={true} showLogin={true} showSignUp={true} />
      )}
      <Header />

      {compareDetails < 1 ? (
        <></>
      ) : (
        <div className="compare-message">
          {"Bạn đã chọn: " + compareDetails.length}

          <div>
            {compareDetails.map((product) => (
              <a
                className="compare-demo-card"
                href={`/product-detail/${product.id}`}
              >
                <img src={product.image} alt="Hinh so sanh" />
              </a>
            ))}
          </div>
          <button onClick={handleCompareClick} className="compare-button">
            So sánh
          </button>
        </div>
      )}

      <div id="cu-gay">
        <TitleBar label="Lồng chim cu gáy"></TitleBar>
      </div>
      <ListCart />
      <div id="hoa-mi">
        <TitleBar label="Lồng chim họa mi"></TitleBar>
      </div>
      <ListCart />
      <div id="chao-mao">
        <TitleBar label="Lồng chim chào mào"></TitleBar>
      </div>
      <ListCart />
      <div id="khuyen">
        <TitleBar label="Lồng chim khuyên"></TitleBar>
      </div>
      <ListCart />
      <div id="choe-than">
        <TitleBar label="Lồng chim chòe than"></TitleBar>
      </div>
      <ListCart />
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default Index;
