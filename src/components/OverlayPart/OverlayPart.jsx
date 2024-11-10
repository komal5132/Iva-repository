import React, { useContext, useState } from 'react';
import "./OverlayPart.css";
import { FaArrowLeft } from "react-icons/fa";
import parentLogo from "../../assets/parentLogo.png";
import teacherLogo from "../../assets/teacherLogo.png";
import adminLogo from "../../assets/adminLogo.webp";
import { kidsContext } from '../../context/kidsContextProvider';
import { Link } from 'react-router-dom';

const OverlayPart = () => {
  const { isOverlayVisible, setOverlayVisible, hideOverlay, overlayMode } = useContext(kidsContext);
  const [isSignUpMode, setIsSignUpMode] = useState(false); // New state for toggling login/sign-up

  const showSignUp = () => setIsSignUpMode(true);  // Set mode to sign-up
  const showLogin = () => setIsSignUpMode(false);  // Set mode to login

  return (
    <div className="overlay">
      <div className="overlayContent">
        <button className="closeButton" onClick={() => { hideOverlay(); showLogin(); }}>
          <FaArrowLeft />
        </button>
        <h2>{isSignUpMode ? "Sign Up As" : "Login As"}</h2>

        {/* Conditionally render the Admin button only in login mode */}
        {!isSignUpMode && (
          <Link to={"/adminLogin"} style={{ textDecoration: "none" }}>
            <div className="admin-div overlay-div" onClick={hideOverlay}>
              <img src={adminLogo} alt="Admin" />
              <button className="roleButton">Admin</button>
            </div>
          </Link>
        )}

        <Link to={"/teacherLogin"} style={{ textDecoration: "none" }}>
          <div className="teacher-div overlay-div" onClick={hideOverlay}>
            <img src={teacherLogo} alt="Teacher" />
            <button className="roleButton">{isSignUpMode ? "Teacher" : "Teacher"}</button>
          </div>
        </Link>
        
        <Link to={"/parentLogin"} style={{ textDecoration: "none" }}>
          <div className="parent-div overlay-div" onClick={hideOverlay}>
            <img src={parentLogo} alt="Parent" />
            <button className="roleButton">{isSignUpMode ? "Parent" : "Parent"}</button>
          </div>
        </Link>

        {/* Toggle between Sign Up and Login */}
        {!isSignUpMode ? (
          <div className="new-user">
            <p>New User? <span onClick={showSignUp}>Sign Up</span></p>
          </div>
        ) : (
          <div className="existing-user new-user">
            <p>Already a User? <span onClick={showLogin}>Login</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OverlayPart;
