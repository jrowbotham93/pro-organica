import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

//  pass down opacity state which is set in navigation components
//  the gatsby bg image uses 0.99 opacity which makes the full page nav
//  transparent. Use the preserveStackingContext to toggle between 0.99 & 1 opacity
const Hero = ({ home, children, opacity }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "proorganica-hero.jpg" } }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      {home ? (
        <BackgroundImage
          fluid={
            allFile.edges[0].node.childImageSharp &&
            allFile.edges[0].node.childImageSharp.fluid
          }
          preserveStackingContext={opacity}
          fadeIn="eager"
        >
          {children}
        </BackgroundImage>
      ) : (
        <> {children} </>
      )}{" "}
    </>
  );
};

export default Hero;
