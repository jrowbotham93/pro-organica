import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// import moment from "moment";

const Card = pages => {
  const {
    data: { metadata, title, slug },
  } = pages;
  const url = `/${slug}/`;

  return (
    <Link to={url} className="post-card">
      <header className="post-card-header">
        {metadata.main_image && (
          <div
            className="post-card-image"
            style={{
              backgroundImage: `url(${metadata.main_image.url})`,
            }}
          ></div>
        )}
        <h2 className="post-card-title">{title}</h2>
      </header>
      <section className="post-card-excerpt">
        {metadata.excerpt && metadata.excerpt}
      </section>
      <footer className="post-card-footer">
        <div className="post-card-footer-left">
          {/* <button>Read more</button> */}
        </div>
        <div className="post-card-footer-right">
          {/* last updated: {moment(created).fromNow()} */}
        </div>
      </footer>
    </Link>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
  }),
};

export default Card;
