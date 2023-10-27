import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <h1>LOGO</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>065-132567</p>
          <p>info@lorem.net</p>
        </div>
      </div>
      <div className="footer-copyright">
      <p>@2023 Salwa Yehya. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer