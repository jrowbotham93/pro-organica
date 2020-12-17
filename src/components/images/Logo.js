import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
const LogoWrap = styled.div`
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 18px;
  }
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query getWhiteLogoForFooter {
      file(relativePath: { regex: "/proorganica-logo-white/" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 60) {
            presentationWidth
            presentationHeight
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <LogoWrap as={Link} to="/" alt="proorganica logo">
      <Img
        fluid={data.file && data.file.childImageSharp.fluid}
        style={{
          width: data.file.childImageSharp.fluid.presentationWidth,
          height: data.file.childImageSharp.fluid.presentationHeight,
        }}
      />{" "}
    </LogoWrap>
  );
};

export default Logo;
