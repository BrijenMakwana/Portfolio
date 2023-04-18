import React from "react";
import color from "../colors/color";
import "./SectionHeading.css";

export default function SectionHeading(props) {
  const { title } = props;
  return (
    <h2 className="section-heading" style={{ color: color.primary }}>
      {title}
    </h2>
  );
}
