import React from "react";
import Img from "gatsby-image";

const Image = ({ image, type, label = "Proorganica image", styles = "" }) => {
  return (
    <>
      {type === "fluid" ? (
        <Img alt={label} fluid={image} className={styles} />
      ) : type === "fixed" ? (
        <Img alt={label} fluid={image} className={styles} />
      ) : (
        <img alt={label} src={image} className={styles} />
      )}
    </>
  );
};

export default Image;
