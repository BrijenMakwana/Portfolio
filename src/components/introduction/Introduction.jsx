import React from "react";
import "./Introduction.css";
import Me from "../../img/brijen.jpg";

const Introduction = (props) => {
  const { name, roles, introduction } = props;
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">{name}</h1>
          <div className="i-title">
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
        <div className="i-card">
          <img src={Me} alt="Brijen Makwana" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
