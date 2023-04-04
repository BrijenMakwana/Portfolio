import React, { useState } from "react";
import "./ProjectItem.css";
import color from "../../colors/color";

export default function ProjectItem(props) {
  const [bgColor, setBgColor] = useState("");
  return (
    <div
      className="p"
      style={{ backgroundColor: bgColor }}
      onMouseOver={() => setBgColor(color.primary)}
      onMouseOut={() => setBgColor("")}
    >
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt={props.title} className="p-img" />
        <div className="p-info">
          <h2 className="p-title" style={{ color: color.secondary }}>
            {props.title}
          </h2>
          <p className="p-details">{props.description}</p>
        </div>
      </a>
    </div>
  );
}
