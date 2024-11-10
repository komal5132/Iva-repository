import React from 'react'
import "./Program.css"
import { programData } from '../../assets/programsData';

const Program = () => {
  return (
    <div className="programs-section" id='program'>
      <div className="programs-heading">
        <h1>Nurturing Minds and Building Foundations!</h1>
        {/* <p>Our play-based curriculum fosters creativity, curiosity, and confidence.</p> */}
      </div>
      <div className="programs-cards">
        {programData.map((program) => (
          <div className="program-card" key={program.name}>
            <img src={program.img} alt={program.name} />
            <h3>{program.name}</h3>
            <p>{program.desc}</p>
          </div>
        ))}
      </div>
      <button className="button-89">Explore Curriculum</button>
    </div>
  );
}

export default Program