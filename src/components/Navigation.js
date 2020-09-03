import React from "react";
import PropTypes from "prop-types";
import { window } from "browser-monads";
import { Link, StaticQuery, graphql } from "gatsby";

/**
 * Navigation component
 *
 * The Navigation component takes an array of the page slugs fetched from the cms.
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */

const Navigation = ({ data, navClass }) => {
  const pages = data.allCosmicjsPages.edges;

  return (
    <>
      <Link className={navClass} to={"/"}>
        Home
      </Link>
      {pages
        .filter(i => i.node.slug !== "home")
        .map((navItem, i) => {
          return (
            <Link
              className={navClass}
              // HACKY: check to see whether Ukrainan in the url and then append uk-UA / leave empty for GB
              to={`${
                window.location.pathname.split("/")[1] === "uk-UA"
                  ? "/uk-UA"
                  : ""
              }/${navItem.node.slug}`.replace("en-GB", "")}
              key={i}
            >
              {navItem.node.title}
            </Link>
          );
        })}
    </>
  );
};

Navigation.defaultProps = {
  navClass: `site-nav-item`,
};

Navigation.propTypes = {
  // data: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     slug: PropTypes.string.isRequired,
  //   }).isRequired
  // ).isRequired,
  navClass: PropTypes.string,
};

const DefaultNavigationQuery = props => (
  <StaticQuery
    query={graphql`
      {
        allCosmicjsPages(filter: { locale: { eq: "en-GB" } }) {
          edges {
            node {
              slug
              locale
              title
            }
          }
        }
      }
    `}
    render={data => (
      <Navigation data={data} navClass="site-nav-item" {...props} />
    )}
  />
);

export default DefaultNavigationQuery;
