import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar/index.jsx";
import Header from "../Components/Header/index.jsx";
import ListCart from "../Components/List-cart/index.jsx";
import TitleBar from "../Components/Title-bar/index.jsx";
import Footer from "../Components/footer/index.jsx";
import BackToTopButton from "../Components/BackToHome/index.jsx";
import { useAuth } from "../AuthContext.jsx";
import { useCart } from "../CardContext.jsx";
import "./index.css";
import DifferenceIcon from '@mui/icons-material/Difference';

const Index = () => {
  const mainRef = useRef(null);
  const { loggedInUser } = useAuth();
  const { handleCompareClick } = useCart();
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
      <button onClick={handleCompareClick} className="compare-button" >So sánh</button>

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
