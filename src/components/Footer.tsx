import React from 'react'
import facebookLogo from "../assets/images/icon-facebook.svg"
import twitterLogo from "../assets/images/icon-twitter.svg"
import pinterestLogo from "../assets/images/icon-pinterest.svg"
import instagramLogo from "../assets/images/icon-instagram.svg"
export default function Footer() {
  return (
    <div className="footer">
      <h4>Sunnyside</h4>
      <div className="menus">
        <p>About</p>
        <p>Services</p>
        <p>Projects</p>
      </div>
      <div className="icons">
        <img src={facebookLogo} />
        <img src={instagramLogo} alt="facebook icon" />
        <img src={twitterLogo} alt="facebook icon" />
        <img src={pinterestLogo} alt="facebook icon" />
      </div>
    </div>
  );
}
