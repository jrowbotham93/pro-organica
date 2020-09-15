import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const ImageCard = ({ filename, alt }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allCosmicjsLocalMedia {
            edges {
              node {
                url
                local {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.allCosmicjsLocalMedia.edges.find(n => {
          return n.node.url.includes(filename);
        });
        if (!image) {
          return null;
        }
        return (
          <Img
            className="img-general"
            alt={alt}
            fluid={image.node.local.childImageSharp.fluid}
            fadeIn="eager"
          ></Img>
        );
      }}
    />
  );
};
export default ImageCard;
