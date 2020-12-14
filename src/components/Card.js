import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { ImageCard } from ".";

const Card = ({ data, buttonText }) => {
  const { metadata, title, slug, locale } = data;

  return (
    <Link to={`/${locale}/${slug}`.replace("/en-GB", "")} className="post-card">
      <header className="post-card-header large-img">
        {metadata.main_image && (
          <ImageCard
            className="post-card-image"
            alt={title}
            filename={metadata && metadata.main_image.url}
            renderLargeImage
          ></ImageCard>
        )}
        <h2 className="post-card-title">{title}</h2>
      </header>
      <footer className="post-card-footer">
        <button className="card-button">{buttonText && buttonText}</button>
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
