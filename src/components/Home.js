import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

export function Home() {

  let user = useSelector(state => state.loginUser.currentUser);

  if (!user) {
    // alert("User Not Found " + user);
    return (<Redirect to="/Login" />);
  }

  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default Home;