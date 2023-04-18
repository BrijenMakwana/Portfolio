import React from "react";
import "./About.css";
import Me from "../../img/brijen_black.png";
import color from "../../colors/color";
import SectionHeading from "../../UIComponents/SectionHeading";

export default function About(props) {
  const { about } = props;
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
        <SectionHeading title="About Me" />
        <p className="a-desc">{about}</p>
      </div>
    </div>
  );
}
