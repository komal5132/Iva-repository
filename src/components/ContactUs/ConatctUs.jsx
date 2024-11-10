import React from 'react'
import "./ContactUs.css"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ConatctUs = () => {
  return (
    <div className="contact" id='contact'>
    <section className="contact-section" id='contact'>
      <h1>Get in Touch</h1>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe 
          title="School Location"
          src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_LINK" 
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-item">
          <FaPhoneAlt className="info-icon" />
          <p>+91 9306 8672 72</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <p>kidsvelly@gmail.com</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <p>2022 Eldeco County , Sector 19 , Sonipat-13027(HR.)</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </section>
    </div>
  )
}

export default ConatctUs