import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Hero = ({ home, children }) => {
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
          preserveStackingContext={false}
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
