import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="f" id="contact">
      <div className="f-texts">
        <h1 className="f-title">Contact Details</h1>
        <p className="f-desc">
          <a href={`mailto:${props.email}`}>{props.email}</a> <br />
          <a href={`tel:${props.phone}`}>{props.phone}</a>
        </p>
      </div>
    </div>
  );
}
