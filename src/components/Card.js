import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { ImageCard } from ".";

const Card = pages => {
  const {
    data: { metadata, title, slug },
  } = pages;
  const url = `/${slug}/`;

  return (
    <Link to={url} className="post-card">
      <header className="post-card-header">
        {metadata.main_image && (
          <ImageCard
            className="post-card-image"
            alt={title}
            filename={metadata && metadata.main_image.url}
          ></ImageCard>
        )}
        <h2 className="post-card-title">{title}</h2>
      </header>
      <section className="">
        <p>{metadata.excerpt && metadata.excerpt}</p>
      </section>
      <footer className="post-card-footer">
        <div className="post-card-footer-left">
          <button className="card-button">Read more</button>
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
