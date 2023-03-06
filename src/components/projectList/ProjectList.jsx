import React, { useState, useEffect } from "react";
import "./ProjectList.css";
import ProjectItem from "../projectItem/ProjectItem";

export default function ProjectList(props) {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    fetch(
      "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22projects%22%5D%7B%0A%20%20title%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20description%2C%0A%20%20url%0A%7D"
    )
      .then((res) => res.json())
      .then((res) => {
        setProjects(res.result);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <h1 className="pl-title">{props.heading}</h1>
        <p className="pl-desc">{props.description}</p>
      </div>
      <div className="pl-list">
        {projects &&
          projects.map((item, index) => (
            <ProjectItem
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              url={item.url}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
}
