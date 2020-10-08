import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
const LogoWrap = styled.div`
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 9px;
  }
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "proorganica-white.png" }) {
        childImageSharp {
          fixed(width: 170) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/">
      <Img fixed={data.file && data.file.childImageSharp.fixed} />{" "}
    </LogoWrap>
  );
};

export default Image;
