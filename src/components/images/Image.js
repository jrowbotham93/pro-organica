import React from "react";
import Img from "gatsby-image";

const Image = ({ image, type, label = "Proorganica image", styles = "" }) => {
  return (
    <>
      {type === "fluid" ? (
        <Img
          alt={label}
          fluid={image}
          fadeIn={false}
          loading="eager"
          className={styles}
        />
      ) : type === "fixed" ? (
        <Img
          alt={label}
          fixed={image}
          fadeIn={false}
          loading="eager"
          className={styles}
        />
      ) : (
        <img alt={label} src={image} className={styles} />
      )}
    </>
  );
};

export default Image;
