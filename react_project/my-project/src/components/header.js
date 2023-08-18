import React from "react";
import "../styles/style.css";

const Header = () => {
  return (
    <header class="section__container header__container">
      <div class="header__image__container">
        <div class="header__content">
          <h1>Welcome to Furama</h1>
          <p>
            A Culinary Resort One One Of The Six Most Luxurious Beaches In The
            World.
          </p>
        </div>
        <div class="booking__container">
          <form>
            <div class="form__group">
              <div class="input__group">
                <input type="text" />
                <label>Check In</label>
              </div>
              <p>Add date</p>
            </div>
            <div class="form__group">
              <div class="input__group">
                <input type="text" />
                <label>Check Out</label>
              </div>
              <p>Add date</p>
            </div>
            <div class="form__group">
              <div class="input__group">
                <input type="text" />
                <label>Guests</label>
              </div>
              <p>Add guests</p>
            </div>
          </form>
          <button class="btn">
            <i class="bx bx-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
