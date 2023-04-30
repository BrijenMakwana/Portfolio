import React from "react";
import "./LinkButton.css";
import color from "../colors/color";

export default function LinkButton(props) {
  const { text, link } = props;
  return (
    <a
      className="linkbtn-text"
      href={link}
      target="blank"
      style={{ backgroundColor: color.primary }}
    >
      {text}
    </a>
  );
}
