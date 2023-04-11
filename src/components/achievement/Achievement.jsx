import React, { useState } from "react";
import "./Achievement.css";
import color from "../../colors/color";

export default function Achievement(props) {
  const [bgColor, setBgColor] = useState("");
  const { title, image, url, description } = props;

  return (
    <div
      className="ac"
      style={{ backgroundColor: bgColor }}
      onMouseOver={() => setBgColor(color.primary)}
      onMouseOut={() => setBgColor("")}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt={title} className="ac-img" />
        <div className="ac-info">
          <h2 className="ac-title" style={{ color: color.secondary }}>
            {title}
          </h2>
          <p className="ac-details">{description}</p>
        </div>
      </a>
    </div>
  );
}
