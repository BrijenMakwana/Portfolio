import React, { useState } from "react";
import "./Project.css";
import color from "../../colors/color";

export default function Project(props) {
  const [bgColor, setBgColor] = useState("");

  const { title, image, url, description, technologies } = props;

  const technologiesArray = technologies.split(",");

  return (
    <div
      className="p"
      style={{ backgroundColor: bgColor }}
      onMouseOver={() => setBgColor(color.primary)}
      onMouseOut={() => setBgColor("")}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt={title} className="p-img" />

        <div className="p-info">
          <h3 className="p-title" style={{ color: color.secondary }}>
            {title}
          </h3>
          <p className="p-details">{description}</p>
        </div>

        <div className="project-technologies-container">
          {technologiesArray.map((tech, index) => (
            <span
              key={index}
              className="project-technology"
              style={{ backgroundColor: color.primary }}
            >
              {tech}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}
