import React from "react";
import "../styles/style.css";

const BookingsList = () => {
  return (
    <section class="section__container popular__container">
      <h2 class="section__header">ROOMS & SUITES</h2>
      <div class="popular__grid">
        <div class="popular__card">
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-768x496.jpg"
            alt="popular hotel"
          />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>OCEAN SUITE</h4>
              <h4>$499</h4>
            </div>
            <p>More Details</p>
          </div>
        </div>
        <div class="popular__card">
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-768x497.jpg"
            alt="popular hotel"
          />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>OCEAN STUDIO SUITE</h4>
              <h4>$549</h4>
            </div>
            <p>More Details</p>
          </div>
        </div>
        <div class="popular__card">
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-768x496.jpg"
            alt="popular hotel"
          />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>OCEAN DELUXE</h4>
              <h4>$599</h4>
            </div>
            <p>More Details</p>
          </div>
        </div>
        <div class="popular__card">
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-768x497.jpg"
            alt="popular hotel"
          />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>LAGOON SUPERIOR</h4>
              <h4>$449</h4>
            </div>
            <p>More Details</p>
          </div>
        </div>
        <div class="popular__card">
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-768x497.jpg"
            alt="popular hotel"
          />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>GARDEN SUPERIOR</h4>
              <h4>$649</h4>
            </div>
            <p>More Details</p>
          </div>
        </div>
        <div class="popular__card">
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-768x497.jpg"
            alt="popular hotel"
          />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>GARDEN DELUXE</h4>
              <h4>$549</h4>
            </div>
            <p>More Details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingsList;
