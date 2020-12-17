import React from "react";
import Img from "gatsby-image";

const Image = ({ image, type, label = "Proorganica image", styles = "" }) => {
  return (
    <>
      {type === "fluid" ? (
        <Img alt={label} fluid={image} styles={styles} />
      ) : type === "fixed" ? (
        <Img alt={label} fluid={image} styles={styles} />
      ) : (
        <img alt={label} src={image} styles={styles} />
      )}
    </>
  );
};

export default Image;
