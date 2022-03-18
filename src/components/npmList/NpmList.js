import React, { useState, useEffect } from "react";
import NpmItem from "../npmItem/NpmItem";
import "./NpmList.css";

export default function NpmList(props) {
  const [npmList, setNpmList] = useState([]);

  const getNpmList = () => {
    fetch(
      "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22npmPackages%22%5D%20%7C%20order(_createdAt%20asc)%7B%0A%20%20_createdAt%2C%0A%20%20title%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20description%2C%0A%20%20url%0A%7D"
    )
      .then((res) => res.json())
      .then((res) => {
        setNpmList(res.result);
      });
  };

  useEffect(() => {
    getNpmList();
  }, []);

  return (
    <div className="nl">
      <div className="nl-texts">
        <h1 className="nl-title">{props.heading}</h1>
        <p className="nl-desc">{props.description}</p>
      </div>
      <div className="nl-list">
        {npmList &&
          npmList.map((item, index) => (
            <NpmItem
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
