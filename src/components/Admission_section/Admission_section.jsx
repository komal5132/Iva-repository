import React from 'react'
import "./Admission_section.css"
import { FaClipboardList, FaCalendarAlt, FaPenFancy } from 'react-icons/fa'; 

const Admission_section = () => {
  return (
    <div className="admission" id='admission'>
    <section className="admission-section">
      <h1>How to Get Started</h1>
      <div className="steps-container">
        <div className="step">
          <FaClipboardList className="step-icon" />
          <h2>1. Submit an Online Application</h2>
          <p>Provide basic details about your child through our easy online form.</p>
        </div>

        <div className="step">
          <FaCalendarAlt className="step-icon" />
          <h2>2. Schedule a School Visit</h2>
          <p>Explore our campus, meet teachers, and get to know us better.</p>
        </div>

        <div className="step">
          <FaPenFancy className="step-icon" />
          <h2>3. Complete the Enrollment Form</h2>
          <p>Once you decide, fill out the form to reserve your child’s spot.</p>
        </div>
      </div>

      <button className="cta-button">Start Your Application</button>
    </section>
    </div>
  )
}

export default Admission_section