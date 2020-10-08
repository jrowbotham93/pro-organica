import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, StaticQuery, graphql } from "gatsby";
import { Navigation, Hero, Image, Header } from ".";
import "../styles/app.css";

const DefaultLayout = ({ children, bodyClass, isHome }) => {
  const [overlay, setOverlay] = useState(false);
  const { pathname } = useLocation();
  const currentPage = pathname.split("/");
  const location = currentPage[1];
  return (
    <>
      <Helmet>
        <html lang="en" />
        <body className={bodyClass} />
      </Helmet>

      <div className="viewport ">
        <div className="viewport-top">
          {/* The main header section on top of the screen */}
          <header className="site-head">
            <Hero home={isHome} opacity={overlay}>
              <div className="container-site-head">
                <div className="site-mast">
                  <Navigation
                    setBackgroundOpacity={() => setOverlay(!overlay)}
                    overlay={overlay}
                    navClass={"site-nav-item"}
                  />
                  <Image loading="eager" />
                </div>
                {isHome ? (
                  <div className="site-banner">
                    <Header siteTitle="PROactive PROfessional PROgressive"></Header>

                    <Link
                      className="site-nav-button"
                      to={`${location === "" ? "" : location}/#contact`}
                    >
                      Contact us
                    </Link>
                  </div>
                ) : null}

                <nav className="site-nav">
                  <div className="site-nav-left"></div>
                  <div className="site-nav-right">
                    <Link
                      className="site-nav-item"
                      to={
                        currentPage[1] == "uk-UA"
                          ? ""
                          : currentPage[1] !== "uk-UA"
                          ? `/uk-UA/${currentPage[1]}`
                          : "uk-UA"
                      }
                    >
                      Українська
                    </Link>
                    <Link
                      className="site-nav-item"
                      to={`/${
                        currentPage[1] !== "uk-UA" ? currentPage[1] : ""
                      }`}
                    >
                      English
                    </Link>{" "}
                  </div>
                </nav>
              </div>{" "}
            </Hero>
          </header>

          <main className="site-main">
            {/* All the main content gets inserted here, index.js, page.js */}
            {children}
          </main>
        </div>

        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <footer className="site-foot">
            <div className="container-site-head">
              <div className="site-foot-grid">
                <div className="site-foot-logo site-col">
                  <Image fixed />
                  <Link to="our-values">
                    {" "}
                    Proactive | Professional | Progressive{" "}
                  </Link>
                </div>
                <div className="site-foot-about site-col">
                  {" "}
                  <strong className="highlight-content">About</strong>
                  <p>
                    We specialize in the sourcing, handling, and supplying of
                    organic produce from Ukraine.
                  </p>
                </div>
                <div className="site-foot-site site-col">
                  <strong className="highlight-content">Site</strong>
                  <Link to="https://proorganica.netlify.app/sitemap.xml">
                    Sitemap
                  </Link>{" "}
                  <a href="https://jrowbotham93/proorganica" target="_blank">
                    Github
                  </a>
                </div>

                <div className="site-foot-quick-links site-col">
                  {" "}
                  <strong className="highlight-content uppercase">
                    Company
                  </strong>
                  <Link to={`/#certification`}>Certification</Link>
                  <Link to={`/#contact`}>Contact </Link>
                  <a
                    href="https://graintrade.com.ua/en/traider/chemex-ltd-id15479"
                    target="_blank"
                  >
                    Chemex Graintrade
                  </a>
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/11348509"
                    target="_blank"
                  >
                    Company Ltd Details{" "}
                  </a>
                </div>
              </div>
              <div className="site-foot-rights-reserved">
                © {new Date().getFullYear()} ProOrganica. All rights reserved
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

              title
              created_by
              created
              metafields {
                imgix_url
              }
              metadata {
                products
                products_table
                excerpt
                who_are_we
                certification
                certification_header
                certification_eu {
                  url
                  imgix_url
                }
                certification_cor {
                  url
                  imgix_url
                }
                certification_uk {
                  imgix_url
                  url
                }
                main_image {
                  url
                  imgix_url
                }
                home_banner_image {
                  url
                  imgix_url
                }
                home_banner_description
                contact_us
                get_in_touch

                contact_details {
                  contact {
                    address {
                      address
                      building
                      city
                      country
                      postcode
                      street
                    }
                    contacts {
                      email
                      name
                      position
                      telephone
                    }
                    country
                    email
                    telephone
                    name
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
