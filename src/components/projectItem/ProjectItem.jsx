import React from "react";
import "./ProjectItem.css";

export default function ProjectItem(props) {
  return (
    <div className="p">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt={props.title} className="p-img" />
      </a>
      <div className="p-info">
        <h2 className="p-title">{props.title}</h2>
        <p className="p-details">{props.description}</p>
      </div>
    </div>
  );
}
