import React from "react";
import "./Banner.css";
import video from "../../assets/banner_video.mp4";

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-media">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <h1>Learning, Laughing, and Growing Together!</h1>
        <p className="hero-subheading">
          Play-based learning in a nurturing and fun environment for every child.
        </p>

        <div className="cta-buttons">
          <button className="primary-cta">Enroll Now</button>
          <button className="secondary-cta">Book a Visit</button>
        </div>

        <div className="quick-links">
          <a href="#programs">Explore Programs</a>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;
