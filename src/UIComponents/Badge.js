import React from "react";
import "./Badge.css";
import color from "../colors/color";

export default function Badge(props) {
  const { title } = props;

  return (
    <span className="badge" style={{ backgroundColor: color.primary }}>
      {title}
    </span>
  );
}
