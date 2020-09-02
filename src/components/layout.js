import React from "react";
import { Helmet } from "react-helmet";
import { window } from "browser-monads";
import { Link, StaticQuery, graphql } from "gatsby";

import "../styles/app.css";
import { Navigation, Header, Image } from ".";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */

const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
  const currentPage = window.location.pathname.split("/");
  const location = currentPage[1];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <body className={bodyClass} />
      </Helmet>

      <div className="viewport">
        <div className="viewport-top">
          {/* The main header section on top of the screen */}
          <header
            className="site-head"
            // style={{
            //   ...(isHome && {
            //     backgroundImage: `url(${
            //       node.metadata.home_banner_image &&
            //       node.metadata.home_banner_image.local.childImageSharp.fluid
            //         .src
            //     })`,
            //   }),
            // }}
          >
            <div className="container">
              <div className="site-mast">
                <div className="site-mast-left">
                  <Navigation navClass={"site-nav-item"} />
                </div>
                <div className="site-mast-right">
                  <Image />
                </div>
              </div>
              {isHome ? (
                <div className="site-banner">
                  <Header siteTitle="We are proactive, professional, and progressive."></Header>
                </div>
              ) : null}
              <nav className="site-nav">
                <div className="site-nav-left">
                  <div className="site-foot-nav-left"> </div>
                  {isHome ? (
                    <div className="site-nav-item">
                      <Link
                        className="site-nav-button"
                        to={`${location === "" ? "" : location}/#contact`}
                      >
                        Contact us
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="site-nav-right">
                  {" "}
                  <Link
                    className="site-nav-item"
                    to={`/uk-UA/${currentPage[1]}`}
                  >
                    Українська
                  </Link>
                  <Link className="site-nav-item" to={`/`}>
                    English
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          <main className="site-main">
            {/* All the main content gets inserted here, index.js, page.js */}
            {children}
          </main>
        </div>

        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <footer className="site-foot">
            <div className="site-foot-nav container">
              <div className="site-foot-nav-right">
                <Navigation navClass="site-foot-nav-item" />© 2020 ProOrganica
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

const DefaultLayoutSettingsQuery = props => (
  <StaticQuery
    query={graphql`
      {
        allCosmicjsPages(filter: { slug: { eq: "home" } }) {
          edges {
            node {
              slug
              locale
              content
              created_by
              created
              metafields {
                imgix_url
              }
              metadata {
                excerpt
                accreditation
                home_banner_description
                certification_cor_image {
                  url
                  imgix_url
                }
                certification_cor {
                  url
                  imgix_url
                }
                certification_european {
                  url
                  imgix_url
                }
                certification_european_image {
                  url
                  imgix_url
                }
                certification
                certification_united_kingdom {
                  imgix_url
                  url
                }
                certification_united_kingdom_image {
                  imgix_url
                  url
                }
                home_banner_image {
                  local {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <DefaultLayout data={data} {...props} />}
  />
);

export default DefaultLayoutSettingsQuery;
