import React from "react";
import { ImageFluid } from ".";
import PropTypes from "prop-types";

const Certification = ({ data }) => {
  return (
    <>
      {data && (
        <a
          href={data.cert && data.cert.url}
          target="_blank"
          className="certification-card"
          rel="noreferrer"
        >
          <section>
            <div className="certification-card-image">
              <ImageFluid
                filename={data.img && data.img}
                alt="certificate for organics"
              />
            </div>
          </section>
        </a>
      )}
    </>
  );
};

Certification.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
  }),
};

export default Certification;
