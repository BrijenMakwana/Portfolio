import React from "react";
import "./Fab.css";
import fabIcon from "../../assets/fabIcon.png";
import closeFab from "../../assets/closeFab.png";

export default function Fab(props) {
  const { fabOpen, setFabOpen } = props;
  return (
    <div className="fab-container" onClick={() => setFabOpen((prev) => !prev)}>
      <img src={fabOpen ? closeFab : fabIcon} alt="fab" className="fab-icon" />
    </div>
  );
}
