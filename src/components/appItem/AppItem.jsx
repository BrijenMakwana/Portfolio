import React from "react";
import "./AppItem.css";

export default function AppItem(props) {
  const { title, image, url } = props;
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="ai">
        <img src={image} alt={title} className="ai-img" />

        <h3 className="ai-title">{title}</h3>
      </div>
    </a>
  );
}
