import React from "react";
import "./About.css";
import Me from "../../assets/images/brijen_2.png";
import SectionHeading from "../../UIComponents/SectionHeading";

export default function About(props) {
  const { about } = props;
  return (
    <div className="a" id="about">
      <div className="a-left">
        <img src={Me} alt="Brijen Makwana" className="a-img" />
      </div>
      <div className="a-right">
        <SectionHeading title="About Me" />
        <p className="a-desc">{about}</p>
      </div>
    </div>
  );
}
