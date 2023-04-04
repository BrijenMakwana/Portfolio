import React from "react";
import "./Footer.css";
import color from "../../colors/color";

export default function Footer(props) {
  return (
    <div className="f" id="contact" style={{ backgroundColor: color.primary }}>
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
