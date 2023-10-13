import React from "react";
import "./SectionHeading.css";

export default function SectionHeading(props) {
  const { title } = props;
  return <h2 className="section-heading">{title}</h2>;
}
