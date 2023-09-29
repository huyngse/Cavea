import React, { useState, useRef, useEffect } from "react";

import Navbar from "../Components/Navbar/index.jsx";
import Header from "../Components/Header/index.jsx";
import ListCart from "../Components/List-cart/index.jsx";
import TitleBar from "../Components/Title-bar/index.jsx";
import Footer from "../Components/footer/index.jsx";
import BackToTopButton from "../Components/BackToHome/index.jsx";
import { useAuth } from "../AuthContext.jsx";
import { products } from "../Components/List-cart/list_product.jsx";
import { useCart } from "../CardContext.jsx";
import "./index.css";

const Index = () => {
  const mainRef = useRef(null);
  const { loggedInUser } = useAuth();
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
  console.log(compareDetails);
  return (
    <>
      <main ref={mainRef}></main>
      {loggedInUser ? (
        <>
          <Navbar avatar={true} />
          <Header Order={true} />
        </>
      ) : (
        <>
          <Navbar isSearchVisible={true} login={true} />
          <Header signUp={true} />
        </>
      )}
      {compareDetails < 1 ? (
        <></>
      ) : (
        <h2>
          Bất ngờ không thằng lồn, địt mẹ mày đã chọn: {compareDetails.length}{" "}
          sản phẩm{" "}
        </h2>
      )}

      {compareDetails.map((product) => (
        <img style={{ height: "260px" }} src={product.image} alt="" />
      ))}

      <button onClick={handleCompareClick} className="compare-button">
        So sánh
      </button>
      <div id="phu-kien">
        <TitleBar label="Phụ kiện lồng chim" />
      </div>
      <ListCart></ListCart>
      <div id="cu-gay">
        <TitleBar label="Lồng chim cu gáy"></TitleBar>
      </div>
      <ListCart></ListCart>
      <div id="hoa-mi">
        <TitleBar label="Lồng chim họa mi"></TitleBar>
      </div>
      <ListCart></ListCart>
      <div id="chao-mao">
        <TitleBar label="Lồng chim chào mào"></TitleBar>
      </div>
      <ListCart></ListCart>
      <div id="khuyen">
        <TitleBar label="Lồng chim khuyên"></TitleBar>
      </div>
      <ListCart></ListCart>
      <div id="choe-than">
        <TitleBar label="Lồng chim chòe than"></TitleBar>
      </div>
      <ListCart></ListCart>
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default Index;
