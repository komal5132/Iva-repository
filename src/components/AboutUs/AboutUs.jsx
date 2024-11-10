import React from "react";
import "./AboutUs.css";
import introImg from "../../assets/about-intro-image.webp";
import vissionImg from "../../assets/vission-image.jpeg";
import missionImg from "../../assets/mission-image.webp";

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <h1>About Us</h1>
      <div className="about-points">
        <div className="about-point">
          <div className="about-point-text">
            <h3>Introduction</h3>
            <p>
            At <b>Iva Kids Valley</b>, we believe that every child deserves a joyful and stimulating environment to grow, explore, and learn.              
            </p>
          </div>
          <div className="empty">            
            <img src={introImg} alt="Introduction Image" />
          </div>
        </div>
        <div className="about-point">
          <div className="empty">
            <img src={vissionImg} alt="Vision Image" />
          </div>
          <div className="about-point-text">
            <h3>Vision</h3>
            <p>
            Our vision is to be a cornerstone in early education by creating a world where children are empowered to dream, 
              explore, and achieve.
            </p>
          </div>
        </div>
        <div className="about-point">
          <div className="about-point-text">
            <h3>Mission</h3>
            <p>
            Our mission at <b>Iva Kids Valley</b> is to cultivate a love for learning by providing high-quality early education 
              that promotes creativity, kindness, and social development.
            </p>
          </div>
          <div className="empty">
            {" "}
            <img src={missionImg} alt="Mission Image" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
