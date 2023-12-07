import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="/images/SERAPHICLOGO.png" alt="" />
              {/* <h2>Do You Need Help With Anything?</h2> */}
              <p>
                We are a consistently patient-first, world-class healthcare
                service provider and the leading private tertiary care
                organization in Nigeria.
              </p>
              <div className="contact">
                <span>
                  <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;
                  <a href="tel:2347030303030">07030303030</a>
                </span>
                <span>
                  <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;
                  <a href="mailto:info@seraphichospital.com">
                    seraphichospital.com
                  </a>
                </span>
              </div>
              <div className="social">
                <a title="Facebook" href="" target="_blank" class="facebook">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a title="Twitter" href="" target="_blank" class="twitter">
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a title="Twitter" href="" target="_blank" class="twitter">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Our Services</a>
              </li>
              <li>
                <a href="">Our Doctors</a>
              </li>
              <li>
                <a href="">Our Gallery</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="box">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Our Services</a>
              </li>
              <li>
                <a href="">Our Doctors</a>
              </li>
              <li>
                <a href="">Our Gallery</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>
          © 2023. Designd By <a href="" style={{ color: "white"}}>Ebuka Moses</a>.
        </span>
      </div>
    </>
  );
};

export default Footer;
