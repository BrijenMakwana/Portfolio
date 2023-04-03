import React from "react";
import "./Fab.css";
import openFab from "../../assets/openFab.png";
import closeFab from "../../assets/closeFab.png";

export default function Fab(props) {
  const { fabOpen, setFabOpen } = props;
  return (
    <div className="fab-container" onClick={() => setFabOpen((prev) => !prev)}>
      <img src={fabOpen ? closeFab : openFab} alt="fab" className="fab-icon" />
    </div>
  );
}
