import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
<FaAngleRight />;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="logo.png" alt="Iva Kids Valley Logo" />
          <p>Where Play Meets Learning!</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
            <li>
              <a href="#admissions">Admissions</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 123 Learning Lane, Happy Town</p>
          <p>📞 +1-234-567-890</p>
          <p>📧 contact@ivakidsvalley.com</p>
        </div>

        <div className="footer-social">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a href="#" className="social-link">
              < FaFacebook/>
            </a>
            <a href="#" className="social-link">
              <AiFillInstagram/>
            </a>
            <a href="#" className="social-link">
              <IoLogoWhatsapp/>
            </a>
          </div>
          <div className="newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <form>
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Iva Kids Valley. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
