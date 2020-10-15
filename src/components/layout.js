import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { Link, StaticQuery, graphql } from "gatsby";
import { Navigation, Hero, Image, Header } from ".";
import "../styles/app.css";

const DefaultLayout = ({ children, bodyClass, isHome, data }) => {
  const [overlay, setOverlay] = useState(false);
  const { pathname } = useLocation();
  const currentPage = pathname.split("/");
  const location = currentPage[1];
  const locale = currentPage.some(i => i === "uk-UA");
  const currentLocale = locale ? "uk-UA" : "en-GB";

  const localize = obj => {
    return obj.edges.filter(i => i.node.locale.includes(currentLocale));
  };

  const { home, allPages } = data;
  const pages = localize(allPages);
  const [node] = localize(home);

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
                    location={location}
                  />
                  <Image fluid loading="eager" />
                </div>
                {isHome ? (
                  <div className="site-banner">
                    <Header siteTitle="PROactive PROfessional PROgressive"></Header>

                    <Link
                      className="site-nav-button"
                      to={`${location}/#contact`.replace("uk-UA/", "")}
                    >
                      {node.node.metadata && node.node.metadata.contact_button}{" "}
                    </Link>
                  </div>
                ) : null}

                <nav className="site-nav">
                  <div className="site-nav-left"></div>
                  <div className="site-nav-right">
                    <Link
                      className="site-nav-item"
                      to={
                        currentPage[1] === "uk-UA"
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
                      to={`/${currentPage[2] ? currentPage[2] : ""}`.replace(
                        "undefined",
                        ""
                      )}
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
                  <Image fluid />
                  <Link className="footer-values" to="/our-values">
                    {" "}
                    <span>Proactive | Professional | Progressive </span>
                  </Link>
                </div>
                <div className="site-foot-about site-col">
                  {" "}
                  <strong className="highlight-content">About</strong>
                  {pages.map((i, key) => (
                    <span key={key}>
                      <Link to={`/${i.node.slug}`}>{i.node.title}</Link>
                    </span>
                  ))}
                </div>

                <div className="site-foot-site site-col">
                  <strong className="highlight-content">Site</strong>
                  <a
                    href="https://proorganica.com/sitemap.xml"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Sitemap
                  </a>
                  <a
                    href="https://github.com/jrowbotham93/pro-organica"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>

                <div className="site-foot-quick-links site-col">
                  {" "}
                  <strong className="highlight-content uppercase">
                    ProOrganica
                  </strong>
                  <Link to={`/#certification`}>Certification</Link>
                  <Link to={`/#contact`}>Contact </Link>
                  <a
                    href="https://graintrade.com.ua/en/traider/chemex-ltd-id15479"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chemex Graintrade
                  </a>
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/11348509"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Company Ltd Details{" "}
                  </a>
                </div>
              </div>
              <div className="site-foot-rights-reserved site-col">
                <span>
                  {" "}
                  © {new Date().getFullYear()}{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://proorganica.com/"
                  >
                    {" "}
                    ProOrganica
                  </a>{" "}
                  All rights reserved
                </span>
                <span>
                  {" "}
                  Made by{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://james-rowbotham.netlify.app/"
                  >
                    {" "}
                    James Rowbotham
                  </a>
                </span>
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
        allPages: allCosmicjsPages {
          edges {
            node {
              slug
              title
              locale
            }
          }
        }
        home: allCosmicjsPages(filter: { slug: { eq: "home" } }) {
          edges {
            node {
              slug
              locale
              content
              title
              metadata {
                contact_button
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
