import React, { useState } from "react";
import "./AchievementItem.css";
import color from "../../colors/color";

export default function AchievementItem(props) {
  const [bgColor, setBgColor] = useState("");

  return (
    <div
      className="ac"
      style={{ backgroundColor: bgColor }}
      onMouseOver={() => setBgColor(color.primary)}
      onMouseOut={() => setBgColor("")}
    >
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt={props.title} className="ac-img" />
        <div className="ac-info">
          <h2 className="ac-title" style={{ color: color.secondary }}>
            {props.title}
          </h2>
          <p className="ac-details">{props.description}</p>
        </div>
      </a>
    </div>
  );
}
