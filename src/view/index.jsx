import React from "react";

import NavbarForHomePage from "../Components/Navbar/navbar_for_home_page";

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
      </>
    );
  }
}

export default Index;
