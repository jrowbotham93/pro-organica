import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

//  pass down opacity state which is set in navigation components
//  the gatsby bg image uses 0.99 opacity which makes the full page nav
//  transparent. Use the preserveStackingContext to toggle between 0.99 & 1 opacity
const BackgroundSection = ({ home, children, opacity }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { regex: "/proorganica-home-hero.jpg/" } }
      ) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 2000) {
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
          fadeIn={false}
          loading="eager"
        >
          {children}
        </BackgroundImage>
      ) : (
        <> {children} </>
      )}{" "}
    </>
  );
};

const Hero = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 100vh;
`;

export default Hero;
