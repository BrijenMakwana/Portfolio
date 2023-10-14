import React, { useEffect, useState } from "react";
import { Article } from "../article/Article";
import "./Articles.css";
import SectionHeading from "../../UIComponents/SectionHeading";
import LinkButton from "../../UIComponents/LinkButton";

const Articles = (props) => {
  const [latestArticles, setLatestArticles] = useState([]);
  const { heading, description, links } = props;

  const blogLink = links?.find((linkItem) => linkItem.title === "hashnode");

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
        <SectionHeading title={heading} />
        <p className="articles-desc">{description}</p>
      </div>

      <div className="articles-list">
        {latestArticles.map((item) => (
          <Article key={item.cuid} {...item} />
        ))}
      </div>
      <LinkButton text="see all" link={blogLink?.link} />
    </div>
  );
};

export default Articles;
