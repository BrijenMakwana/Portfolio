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
        <h3 className="article-title" style={{ color: color.secondary }}>
          {title}
        </h3>
        <p className="article-description">{brief}</p>
      </a>
    </div>
  );
};
