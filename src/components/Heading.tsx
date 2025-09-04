import React from "react";
import headingBg from "../assets/desktop/image-header.jpg";
import arrow from "../assets/images/icon-arrow-down.svg";

export default function Heading() {
  return (
    <div
      className="header"
      style={{
        backgroundColor: "#4CBEFC",
        backgroundPosition: "center",
        backgroundSize: "fill",
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
          <li>CONTACT</li>
        </div>
      </div>

      <h1>WE ARE CREATIVES</h1>
      <div className="arrow">
        <img src={arrow} alt="" />
      </div>
      <div className="wrapper">
        <div className="img-container">
          <img src={headingBg} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
}
