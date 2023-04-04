import React, { useState } from "react";
import color from "../../colors/color";
import "./OtherItem.css";

export default function OtherItem(props) {
  const [bgColor, setBgColor] = useState("");

  return (
    <div
      className="o"
      style={{ backgroundColor: bgColor }}
      onMouseOver={() => setBgColor(color.primary)}
      onMouseOut={() => setBgColor("")}
    >
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt={props.title} className="o-img" />
        <div className="o-info">
          <h2 className="o-title" style={{ color: color.secondary }}>
            {props.title}
          </h2>
          <p className="o-details">{props.description}</p>
          <h4 className="o-category">{props.type}</h4>
        </div>
      </a>
    </div>
  );
}
