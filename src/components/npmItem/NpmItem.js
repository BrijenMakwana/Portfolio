import React from "react";
import "./NpmItem.css";

export default function NpmItem(props) {
  return (
    <div className="n">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt="npm" className="n-img" />
      </a>
      <div className="n-info">
        <h2 className="n-title">{props.title}</h2>
        <p className="n-details">{props.description}</p>
      </div>
    </div>
  );
}
