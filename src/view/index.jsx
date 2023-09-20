import React, { useRef } from "react";

import Navbar from "../Components/Navbar/index.jsx";
import NavbarForHomePage from "../Components/Navbar/navbar_for_home_page";
import Header from "../Components/Header/index.jsx";
import ListCart from "../Components/List-cart/index.jsx";
import MenuAndSeller from "../Components/Menu-and-seller";
import TitleBar from "../Components/Title-bar/index.jsx";
import Footer from "../Components/footer/index.jsx";

import { useAuth } from "../AuthContext.jsx";

const Index = () => {
  const mainRef = useRef(null);
  const { loggedInUser } = useAuth();
  return (
    <>
      <main ref={mainRef}></main>
      {loggedInUser ? (
        <>
          <Navbar />
          <Header signUp={false} Order={true} />
        </>
      ) : (
        <>
          <NavbarForHomePage
            isSearchVisible={true}
            login={true}
            signUp={false}
          />
          <Header signUp={true} Order={false} />
        </>
      )}

      <MenuAndSeller></MenuAndSeller>
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
      <Footer />
    </>
  );
};

export default Index;
