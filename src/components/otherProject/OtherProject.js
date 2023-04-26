import React, { useState } from "react";
import color from "../../colors/color";
import Badge from "../../UIComponents/Badge";
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
          <h3 className="o-title" style={{ color: color.secondary }}>
            {title}
          </h3>
          <p className="o-details">{description}</p>
          <Badge title={type} />
        </div>
      </a>
    </div>
  );
}
