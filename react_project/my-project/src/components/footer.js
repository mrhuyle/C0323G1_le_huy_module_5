import React from "react";
import "../styles/style.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h2>How to Get to Us</h2>
          <p>
            Furama is a premier base for exploring one of Asia’s most exciting
            new destinations. Just a short drive from Danang lay four
            UNESCO-listed World Heritage Sites:
          </p>
          <p>
            <i class="bx bx-current-location"></i>
            103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
            District, Danang City, Vietnam
          </p>
        </div>
        <div class="footer__col">
          <p>News</p>
          <p>Rack Rate</p>
          <p>Lifestyle Blog</p>
          <p>Work with us</p>
          <p>Contact Us</p>
        </div>
        <div class="footer__col">
          <h4>Legal</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div class="footer__col">
          <h4>Resources</h4>
          <p>Social Media</p>
          <p>Help Center</p>
          <p>Partnerships</p>
        </div>
      </div>
      <div class="footer__bar">© 2018 Furama Resort Danang.</div>
    </footer>
  );
};

export default Footer;
