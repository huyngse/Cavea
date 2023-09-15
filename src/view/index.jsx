import React from "react";

import NavbarForHomePage from "../Components/Navbar/navbar_for_home_page";

class Index extends React.Component {
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
