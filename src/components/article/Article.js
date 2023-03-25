import React from "react";
import "./Article.css";
import moment from "moment";

export const Article = (props) => {
  const { title, brief, coverImage, dateAdded, slug } = props;
  return (
    <div className="article-container">
      <a href={`https://brijen.hashnode.dev/${slug}`} target="blank">
        <span className="date">{moment(dateAdded).format("LL")}</span>
        <img src={coverImage} alt={title} className="article-image" />
        <h2 className="article-title">{title}</h2>
        <p className="article-description">{brief}</p>
      </a>
    </div>
  );
};
