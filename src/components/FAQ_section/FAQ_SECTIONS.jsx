import React from "react";
import "./FAQ_SECTIONS.css"

const FAQ_SECTIONS = () => {
  return (
    <section className="faq" id="faq">
  <h2>Frequently Asked Questions</h2>
  <div className="accordion">
    <div className="accordion-item">
      <button className="accordion-header">
        What age groups do you accept?
      </button>
      <div className="accordion-content">
        <p>We enroll children from 1 to 5 years old.</p>
      </div>
    </div>

    <div className="accordion-item">
      <button className="accordion-header">
        What are your school hours?
      </button>
      <div className="accordion-content">
        <p>Our school is open from 9:00 AM to 3:00 PM, Monday to Friday.</p>
      </div>
    </div>

    <div className="accordion-item">
      <button className="accordion-header">
        Do you provide meals and snacks?
      </button>
      <div className="accordion-content">
        <p>Yes, we offer nutritious snacks and optional meal plans for all students.</p>
      </div>
    </div>

    <div className="accordion-item">
      <button className="accordion-header">
        Is there a nap time for younger children?
      </button>
      <div className="accordion-content">
        <p>Yes, toddlers have a designated nap time to ensure they stay well-rested.</p>
      </div>
    </div>

    <div className="accordion-item">
      <button className="accordion-header">
        How do I enroll my child?
      </button>
      <div className="accordion-content">
        <p>You can start the enrollment process by filling out the online application form or contacting us directly.</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default FAQ_SECTIONS;
