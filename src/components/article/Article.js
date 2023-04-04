import React, { useState } from "react";
import "./Article.css";
import moment from "moment";
import color from "../../colors/color";

export const Article = (props) => {
  const [bgColor, setBgColor] = useState("");
  const { title, brief, coverImage, dateAdded, slug } = props;
  return (
    <div
      className="article-container"
      style={{ backgroundColor: bgColor }}
      onMouseOver={() => setBgColor(color.primary)}
      onMouseOut={() => setBgColor("")}
    >
      <a href={`https://brijen.hashnode.dev/${slug}`} target="blank">
        <span className="date">{moment(dateAdded).format("LL")}</span>
        <img src={coverImage} alt={title} className="article-image" />
        <h2 className="article-title" style={{ color: color.secondary }}>
          {title}
        </h2>
        <p className="article-description">{brief}</p>
      </a>
    </div>
  );
};
