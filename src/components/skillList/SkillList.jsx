import React, { useState, useEffect } from "react";
import "./SkillList.css";
import SkillItem from "../skillItem/SkillItem";

export default function SkillList(props) {
  const [skills, setSkills] = useState([]);

  const getAllSkills = () => {
    fetch(
      "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22skills%22%5D%20%7C%20order(_createdAt%20asc)%7B%0A%20%20_createdAt%2C%0A%20%20title%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D"
    )
      .then((res) => res.json())
      .then((res) => {
        setSkills(res.result);
      });
  };

  useEffect(() => {
    getAllSkills();
  }, []);

  return (
    <div className="sl" id="skills">
      <div className="sl-texts">
        <h1 className="sl-title">{props.heading}</h1>
      </div>
      <div className="sl-list">
        {skills &&
          skills.map((item, index) => (
            <SkillItem
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
      </div>
    </div>
  );
}
