import React, { useState } from 'react'
import "./Facilities.css"
import storytelling from "../../assets/storytelling.webp"
import toyroom from "../../assets/toyroom.webp"
import music from "../../assets/music.webp"
import healthyfood from "../../assets/healthyfood.webp"
import naproom from "../../assets/naproom.webp"
import safety from "../../assets/safety.jpg"
import playground from "../../assets/playground.webp"

const Facilities = () => {
    const [pause,setpause]=useState(false)
    const handleMouseEnter=()=>{
        setpause(true)
    }
    const handleMouseLeave=()=>{
        setpause(false)
    }
  return (
    <section className="facilities-section">
    <h1>Our Facilities</h1>
    <div className={`facilities-marquee ${pause ? "paused" : ""}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
        <div className="facility-card">
            <img src={playground} alt="Playground Icon"/>
            <p>Playground Fun</p>
        </div>
        <div className="facility-card">
            <img src={storytelling} alt="Storytelling Icon"/>
            <p>Storytelling Corner</p>
        </div>
        <div className="facility-card">
            <img src={toyroom} alt="Toy Room Icon"/>
            <p>Toy Room</p>
        </div>        
        <div className="facility-card">
            <img src={music} alt="Music Icon"/>
            <p>Music and Dance</p>
        </div>
        <div className="facility-card">
            <img src={healthyfood} alt="Meal Icon"/>
            <p>Healthy Snacks</p>
        </div>
        <div className="facility-card">
            <img src={naproom} alt="Nap Room Icon"/>
            <p>Nap Room</p>
        </div>
        <div className="facility-card">
            <img src={safety} alt="Security Icon"/>
            <p>Child Safety</p>
        </div>
    </div>
</section>

  )
}

export default Facilities