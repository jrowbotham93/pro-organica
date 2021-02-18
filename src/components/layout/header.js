import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    query getWhiteLogoForHeader {
      file(relativePath: { regex: "/proorganica-logo-white-green.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} />;
};

export default Header;
