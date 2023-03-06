import React, { useState, useEffect } from "react";
import OtherItem from "../otherItem/OtherItem";
import "./Others.css";

export default function Others(props) {
  const [others, setOthers] = useState([]);

  const getOtherProjectsList = () => {
    fetch(
      "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22others%22%5D%7C%20order(_createdAt%20asc)%7B%0A%20%20title%2C%0A%20%20type%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20url%2C%0A%20%20description%0A%7D"
    )
      .then((res) => res.json())
      .then((res) => {
        setOthers(res.result);
      });
  };

  useEffect(() => {
    getOtherProjectsList();
  }, []);

  return (
    <div className="ol" id="others">
      <div className="ol-texts">
        <h1 className="ol-title">{props.heading}</h1>
        <p className="ol-desc">{props.description}</p>
      </div>
      <div className="ol-list">
        {others &&
          others.map((item, index) => (
            <OtherItem
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              url={item.url}
              description={item.description}
              type={item.type}
              randomColor={props.randomColor}
            />
          ))}
      </div>
    </div>
  );
}
