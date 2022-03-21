import React from "react";
import "./OtherItem.css";

export default function OtherItem(props) {
  return (
    <div className="o">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt={props.title} className="o-img" />
      </a>
      <div className="o-info">
        <h2 className="o-title">{props.title}</h2>
        <p className="o-details">{props.description}</p>
        <h4
          className="o-category"
          style={{ backgroundColor: props.randomColor }}
        >
          {props.type}
        </h4>
      </div>
    </div>
  );
}
