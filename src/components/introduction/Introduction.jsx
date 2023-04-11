import React from "react";
import "./Introduction.css";
import Me from "../../img/brijen.png";
import color from "../../colors/color";

const Introduction = (props) => {
  const { name, roles, introduction } = props;
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name" style={{ color: color.primary }}>
            {name}
          </h1>
          <div className="i-title" style={{ borderLeftColor: color.primary }}>
            <div className="i-title-wrapper">
              {roles &&
                roles.split(",").map((role, index) => (
                  <div key={index} className="i-title-item">
                    {role}
                  </div>
                ))}
            </div>
          </div>
          <div className="i-desc">
            <b>Hello There! ✌🏻</b>
            <br />
            <ul>
              {introduction &&
                introduction
                  .split(",")
                  .map((sentence, index) => <li key={index}>{sentence}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg" style={{ backgroundColor: color.primary }}></div>
        <img className="i-img" src={Me} alt={name} />
      </div>
    </div>
  );
};

export default Introduction;
