import React, { useEffect, useState } from "react";
import { Article } from "../article/Article";
import "./ArticleList.css";
import color from "../../colors/color";

export const ArticleList = (props) => {
  const [latestArticles, setLatestArticles] = useState([]);
  const { heading, description } = props;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        user(username: "brijen") {
            _id
            publication {
              title
              posts {
                cuid
                title
                dateAdded
                brief
                coverImage
                slug
              }
            }
          }
      }`,
    }),
  };
  useEffect(() => {
    fetch("https://api.hashnode.com", options)
      .then((response) => response.json())
      .then((data) => {
        // Extract the article information from the response
        const articles = data.data.user.publication.posts;

        setLatestArticles(articles.slice(0, 3));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="articles-box" id="articles">
      <div className="articles-texts">
        <h1 className="articles-title" style={{ color: color.primary }}>
          {heading}
        </h1>
        <p className="articles-desc">{description}</p>
      </div>
      <div className="articles-list">
        {latestArticles.map((item) => (
          <Article key={item.cuid} {...item} />
        ))}
      </div>
    </div>
  );
};
