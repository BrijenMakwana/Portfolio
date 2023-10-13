import React from "react";
import "./Badge.css";

export default function Badge(props) {
  const { title } = props;

  return <span className="badge">{title}</span>;
}
