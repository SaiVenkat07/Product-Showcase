import React from 'react'
import {
    FaPinterestSquare,
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa'
  import './index.css'
  
  export default function Footer() {
    return (
      <nav className="footer">
        <div className="website-logo-container">
          <h1 className="Name">AI Products</h1>
        </div>
        <p className="description">Contact us on</p>
        <div className="contact-us-container">
          <FaPinterestSquare
            className="contact-icon"
            testid="pintrest-social-icon"
          />
          <FaInstagram className="contact-icon" testid="instagram-social-icon" />
          <FaTwitter className="contact-icon" testid="twitter-social-icon" />
          <FaFacebookSquare
            className="contact-icon"
            testid="facebook-social-icon"
          />
        </div>
      </nav>
    )
  }