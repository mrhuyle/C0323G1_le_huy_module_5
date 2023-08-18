import React from "react";
import "../styles/style.css";

const NavBar = () => {
  return (
    <nav>
      <div class="nav__logo">
        <img
          src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
          alt="logo "
          class="img-fluid"
          width="63"
          height="100"
        />
      </div>
      <ul class="nav__links">
        <li class="link">
          <a href="#">Home</a>
        </li>
        <li class="link">
          <a href="#">Book</a>
        </li>
        <li class="link">
          <a href="#">Blog</a>
        </li>
        <li class="link">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
