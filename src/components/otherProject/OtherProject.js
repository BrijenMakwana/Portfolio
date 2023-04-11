import React, { useState } from "react";
import color from "../../colors/color";
import "./OtherProject.css";

export default function OtherProject(props) {
  const [bgColor, setBgColor] = useState("");
  const { title, url, image, type, description } = props;

  return (
    <div
      className="o"
      style={{ backgroundColor: bgColor }}
      onMouseOver={() => setBgColor(color.primary)}
      onMouseOut={() => setBgColor("")}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt={title} className="o-img" />
        <div className="o-info">
          <h2 className="o-title" style={{ color: color.secondary }}>
            {title}
          </h2>
          <p className="o-details">{description}</p>
          <h4 className="o-category">{type}</h4>
        </div>
      </a>
    </div>
  );
}
