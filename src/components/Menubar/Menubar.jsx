import React from "react";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div className="Menubar">
      <a href="#about-us" style={{ textDecoration: "none", color: "black" }}>
        <p>About Us</p>
      </a>
      <a href="#program" style={{ textDecoration: "none", color: "black" }}>
        <p>Programs</p>
      </a>
      <a href="#gallery" style={{ textDecoration: "none", color: "black" }}>
        <p>Gallery</p>
      </a>
      <a href="#admission" style={{ textDecoration: "none", color: "black" }}>
        <p>Admission</p>
      </a>
      <a href="#facilities" style={{ textDecoration: "none", color: "black" }}>
        <p>Facilities</p>
      </a>
      <a href="#contact" style={{ textDecoration: "none", color: "black" }}>
        <p>Contact Us</p>
      </a>
      <a href="#faq" style={{ textDecoration: "none", color: "black" }}>
        <p>FAQ</p>
      </a>
    </div>
  );
};

export default Menubar;
