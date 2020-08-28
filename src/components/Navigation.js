import React from "react";
import PropTypes from "prop-types";
import { Link, StaticQuery, graphql } from "gatsby";

/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */

const Navigation = ({ data, navClass }) => {
  const pages = data.allCosmicjsPages.edges;
  const currentLocation = window.location.pathname.split("/");
  const location = `/${currentLocation[1]}`;

  const urlGenerator = navItem => {
    const slug = navItem.node.slug.toLowerCase().includes("home")
      ? ""
      : navItem.node.slug;
    return `${location === "" ? "" : location}/${slug}`;
  };

  return (
    <>
      {pages.map((navItem, i) => {
        if (navItem.node.slug.match(/^\s?http(s?)/gi)) {
          return (
            <a
              className={navClass}
              href={navItem.slug}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              {navItem.title}
            </a>
          );
        } else {
          return (
            <Link className={navClass} to={urlGenerator(navItem)} key={i}>
              {navItem.node.title}
            </Link>
          );
        }
      })}{" "}
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
