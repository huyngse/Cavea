import React from "react";

import NavbarForHomePage from "../Components/Navbar/navbar_for_home_page";
import Header from "../Components/Header/index.jsx";
import ListCart from "../Components/List-cart/index.jsx";
import MenuAndSeller from "../Components/Menu-and-seller";
import TitleBar from "../Components/Title-bar/index.jsx";
import Footer from "../Components/footer/index.jsx";

class Index extends React.Component {
  render() {
    return (
      <>
        <main ref="main"></main>
        <NavbarForHomePage isSearchVisible={true} login={true} signUp={false} />
        <Header />
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
  }
}

export default Index;
