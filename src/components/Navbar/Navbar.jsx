import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs"; // Icons for hamburger and close
import navbarLoogo from "../../assets/navbarLoogo.webp";
import { kidsContext } from "../../context/kidsContextProvider";
import OverlayPart from "../OverlayPart/OverlayPart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOverlayVisible, setOverlayVisible, showOverlay, hideOverlay, overlayMode } = useContext(kidsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="Navbar">
        <Link to={"/"}>
          <img src={navbarLoogo} alt="" onClick={() => { hideOverlay(); setIsMenuOpen(false); }} />
        </Link>
             
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}><p onClick={toggleMenu}>Home</p></Link>          
          <a href="#program" style={{ textDecoration: "none", color: "black" }} onClick={toggleMenu}>
            <p>Programs</p>
          </a>
          <a href="#admission" style={{ textDecoration: "none", color: "black" }} onClick={toggleMenu}>
            <p>Admission</p>
          </a>
          <a href="#contact" style={{ textDecoration: "none", color: "black" }} onClick={toggleMenu}>
            <p>Contact Us</p>
          </a>
        </div>

        <div className={`side-buttons ${isMenuOpen ? "open" : ""}`}>        
          <button className="dynamic-button" onClick={() => { showOverlay(); overlayMode("login"); setIsMenuOpen(false); }}>
            Login
          </button>
          <button className="signup-button" onClick={() => { showOverlay(); overlayMode("signup"); setIsMenuOpen(false); }}>
            Sign Up
          </button>
          <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <BsThreeDotsVertical />}
        </div>
        </div>
      </div>

      {isOverlayVisible && <OverlayPart />}
    </>
  );
};

export default Navbar;
