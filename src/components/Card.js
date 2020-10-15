import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { ImageCard } from ".";
// import moment from "moment";

const Card = ({ data, buttonText }) => {
  const { metadata, title, slug, locale } = data;

  return (
    <Link to={`/${locale}/${slug}`.replace("/en-GB", "")} className="post-card">
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
          <button className="card-button">{buttonText && buttonText}</button>
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
