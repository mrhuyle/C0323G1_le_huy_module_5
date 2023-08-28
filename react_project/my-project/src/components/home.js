import React from "react";
import Header from "./Header";
import NavBar from "./Navbar";
import Footer from "./Footer";
import BookingsList from "./Rooms";
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
