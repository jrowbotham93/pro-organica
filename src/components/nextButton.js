import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NextButton = ({ locale, title }) => {
  const [displaySlug, setSlug] = useState("");
  const [displayTitle, setTitle] = useState("");

  const {
    allCosmicjsPages: { edges },
  } = useStaticQuery(graphql`
    query {
      allCosmicjsPages {
        edges {
          node {
            slug
            title
            locale
          }
        }
      }
    }
  `);

  useEffect(() => {
    const getNextPage = () => {
      const arrayOfPages =
        edges &&
        edges.filter(
          i =>
            i.node.locale === locale && !i.node.title.includes(title && "Home")
        );
      const randomPage =
        arrayOfPages[Math.floor(Math.random() * arrayOfPages.length)];
      setTitle(randomPage.node.title);
      setSlug(randomPage.node.slug);
    };
    getNextPage();
  });

  return (
    <Link
      className="highlight-content"
      to={`/${locale}/${displaySlug}`.replace("en-GB/", "")}
    >
      {displayTitle} <FontAwesomeIcon icon={faArrowRight} />{" "}
    </Link>
  );
};

export default NextButton;
