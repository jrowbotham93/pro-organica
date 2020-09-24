import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { SEO, Layout, ImageCard } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Page = data => {
  const { slug, content, title, metadata } = data && data.pageContext.page;
  const slugs = [
    "our-story",
    "our-values",
    "why-ukraine",
    "what-we-offer",
    "our-customers",
    "about",
  ];
  const randomizedSlug = s => {
    let slug = slugs.filter(i => !s.includes(i));
    return slug[(slug.length * Math.random()) | 0];
  };
  const randomSlug = randomizedSlug(slug);
  return (
    <>
      <Layout>
        <SEO
          title={title}
          description={`This page is about proorganica: ${
            metadata.excerpt && metadata.excerpt
          }`}
        />
        <div className="container">
          <article className="content">
            <h1 className="content-title">{title && title}</h1>
            <i>{metadata.excerpt && metadata.excerpt}</i>
            {metadata.main_image && (
              <figure className="post-feature-image padding-horizontal-2">
                <ImageCard
                  className="post-card-image"
                  alt={title}
                  filename={metadata && metadata.main_image.url}
                ></ImageCard>
              </figure>
            )}
            <section className="post-full-content">
              {/* The main page content  */}
              <section
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </section>{" "}
            <div className="content-footer">
              {" "}
              <Link className="highlight-content" to={`/${randomSlug}`}>
                {randomSlug.replace("-", " ")}{" "}
                <FontAwesomeIcon icon={faArrowRight} />{" "}
              </Link>
            </div>{" "}
          </article>
        </div>
      </Layout>
    </>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    main_image: PropTypes.string,
  }),
};

export default Page;
