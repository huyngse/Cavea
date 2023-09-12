import React from "react";

import HeaderForHomePage from "../Components/Navbar/navbar_for_home_page";
import Header from "../Components/Header/index.jsx";

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
        <HeaderForHomePage isSearchVisible={true} />
        <Header />
      </>
    );
  }
}

export default Index;
