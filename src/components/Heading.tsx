import React from "react";
import headingBg from "../assets/desktop/image-header.jpg";
import arrow from "../assets/images/icon-arrow-down.svg";

export default function Heading() {
  return (
    <div
      className="header"
      style={{
        backgroundColor: "#4CBEFC",
        backgroundImage: `url(${headingBg})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        height: "80vh",
      }}
    >
      <div className="wrap-heading">
        <div className="heading">
          <h2>sunnyside</h2>
        </div>
        <div className="navlinks">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className="contact-btn">
            <button>CONTACT</button>
          </li>
        </div>
      </div>

      <h1>WE ARE CREATIVES</h1>
      <div className="arrow">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}
