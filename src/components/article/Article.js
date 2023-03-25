import React from "react";
import "./Article.css";
import moment from "moment";

export const Article = (props) => {
  const { title, brief, coverImage, dateAdded } = props;
  return (
    <div className="article-container">
      <span className="date">{moment(dateAdded).format("LL")}</span>
      <img src={coverImage} alt={title} className="article-image" />
      <h2 className="article-title">{title}</h2>
      <p className="article-description">{brief}</p>
    </div>
  );
};
