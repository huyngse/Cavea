import React from "react";
import { Link } from "react-router-dom";
import HeaderForHomePage from "../Components/Header/Header-for-home-page";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <HeaderForHomePage isSearchVisible={true} />
        <main ref="main">
          <Link to="/login-page">Go to Login</Link>
        </main>
      </>
    );
  }
}

export default Index;
