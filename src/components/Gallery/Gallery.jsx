import React from "react";
import "./Gallery.css";
import learning from "../../assets/learning.webp";
import festive from "../../assets/festive.webp";
import play_sports from "../../assets/play_sports.webp";
import art from "../../assets/art.webp";
import dance from "../../assets/dance.webp";
import outdoor from "../../assets/outdoor.webp";

const Gallery = () => {
  return (
    <div className="activity-cards-section" id="gallery">
      <div className="cards-grid">
        <div className="heading">
          <h1>Moments That Matter</h1>
        </div>
        <div className="gallery-grid">
        <div className="activity-card">
          <div className="img-conatiner">
            <img src={learning} alt="" />
          </div>
          <p>Learning Time</p>
          <button className="button-87">Explore More</button>
        </div>
        <div className="activity-card">
          <div className="img-conatiner">
            <img src={festive} alt="" />
          </div>
          <p>Festive Celebrations</p>
          <button className="button-87">Explore More</button>
        </div>
        <div className="activity-card">
          <div className="img-conatiner">
            <img src={play_sports} alt="" />
          </div>
          <p>Play & Sports</p>
          <button className="button-87">Explore More</button>
        </div>
        <div className="activity-card">
          <div className="img-conatiner">
            <img src={art} alt="" />
          </div>

          <p>Art & Crafts</p>
          <button className="button-87">Explore More</button>
        </div>
        <div className="activity-card">
          <div className="img-conatiner">
            <img src={dance} alt="" />
          </div>

          <p>Music & Dance</p>
          <button className="button-87">Explore More</button>
        </div>
        <div className="activity-card">
          <div className="img-conatiner">
            {" "}
            <img src={outdoor} alt="" />
          </div>

          <p>Outdoor Adventures</p>
          <button className="button-87">Explore More</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
