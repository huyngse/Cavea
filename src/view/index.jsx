import React from "react";

import NavbarForHomePage from "../Components/Navbar/navbar_for_home_page";
import Header from "../Components/Header/index.jsx";
import MediaCard from "../Components/Cart";
import MenuAndSeller from "../Components/Menu-and-seller";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main"></main>
        <NavbarForHomePage isSearchVisible={true} login={true} signUp={false} />
        <Header />
        {/* <MediaCard
          productName="Product 1"
          productDescription="This is the description about the first product"
          productImage="../images/product/product1.png"
        /> */}

        <MenuAndSeller></MenuAndSeller>
      </>
    );
  }
}

export default Index;
