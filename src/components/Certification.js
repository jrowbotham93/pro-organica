import React from "react";
import PropTypes from "prop-types";

const Certification = ({ data }) => {
  return (
    <a href={data.cert.url} target="_blank" className="certification-card">
      <section>
        <div className="certification-card-image">
          <img src={data.img.url} alt="certificate" />
        </div>
      </section>
    </a>
  );
};

Certification.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
  }),
};

export default Certification;
