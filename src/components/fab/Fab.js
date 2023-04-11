import React from "react";
import "./Fab.css";
import openFab from "../../assets/openFab.png";
import closeFab from "../../assets/closeFab.png";

export default function Fab(props) {
  const { fabIsOpen, setFabIsOpen } = props;
  return (
    <div
      className="fab-container"
      onClick={() => setFabIsOpen((prev) => !prev)}
    >
      <img
        src={fabIsOpen ? closeFab : openFab}
        alt="fab"
        className="fab-icon"
      />
    </div>
  );
}
