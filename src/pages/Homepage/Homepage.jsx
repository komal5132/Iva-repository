import React, { useContext } from "react";
import Menubar from "../../components/Menubar/Menubar";
import Banner from "../../components/Banner/Banner";
import Program from "../../components/Programs/Program";
import Gallery from "../../components/Gallery/Gallery";
import AboutUs from "../../components/AboutUs/AboutUs";
import Facilities from "../../components/Facilities/Facilities";
import Admission_section from "../../components/Admission_section/Admission_section";
import ConatctUs from "../../components/ContactUs/ConatctUs";
import FAQ_SECTIONS from "../../components/FAQ_section/FAQ_SECTIONS";
import { kidsContext } from "../../context/kidsContextProvider";

const Homepage = () => {
  const { isOverlayVisible} =
    useContext(kidsContext);
  return (
    <div className={`homePage ${isOverlayVisible ? "blurred" : ""}`}>    
      <Banner />
      <Program />
      <Gallery />
      <AboutUs />
      <Facilities />
      <Admission_section />
      <ConatctUs />
      <FAQ_SECTIONS />
    </div>
  );
};

export default Homepage;
