import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div class="nav__logo">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
          alt="logo"
        />
      </div>
      <ul class="nav__links">
        <Link class="link" to={"/"}>
          Home
        </Link>
        <Link class="link" to={"/"}>
          Book
        </Link>
        <Link class="link" to={"/dashboard"}>
          Dashboard
        </Link>
        <Link class="link" to={"/login"}>
          Login
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
