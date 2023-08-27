import React from "react";
import Header from "./header";
import NavBar from "./nav_bar";
import Footer from "./footer";
import BookingsList from "./room";
const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <BookingsList />
      <Footer />
    </>
  );
};
export default Home;
