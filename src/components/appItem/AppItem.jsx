import React from "react";
import "./AppItem.css";

export default function AppItem(props) {
  const { title, image, url } = props;
  return (
    <div className="ai">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt={title} className="ai-img" />
      </a>
      <div className="ai-info">
        <h3 className="ai-title">{title}</h3>
      </div>
    </div>
  );
}
