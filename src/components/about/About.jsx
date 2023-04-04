import React from "react";
import "./About.css";
import Me from "../../img/brijen_black.png";
import color from "../../colors/color";

export default function About(props) {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div
          className="a-card bg"
          style={{ backgroundColor: color.primary }}
        ></div>
        <div className="a-card">
          <img src={Me} alt="Brijen Makwana" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title" style={{ color: color.primary }}>
          About Me
        </h1>
        <p className="a-sub">{props.title}</p>
        <p className="a-desc">{props.description}</p>
      </div>
    </div>
  );
}
