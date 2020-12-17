import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { Link, StaticQuery, graphql } from "gatsby";
import { Navigation, Hero, Image, Section, Header, Grid, Footer } from "..";

import "../../styles/app.css";

const DefaultLayout = ({ children, bodyClass, isHome, data }) => {
  const [overlay, setOverlay] = useState(false);
  const { pathname } = useLocation();
  const currentPage = pathname.split("/");
  const locale = currentPage.some(i => i === "uk-UA");
  const currentLocale = locale ? "uk-UA" : "en-GB";

  const { fluid } = data.whiteProOrganicaLogo.childImageSharp;

  const localize = obj => {
    return obj.edges.filter(i => i.node.locale.includes(currentLocale));
  };
  const { allPages } = data;
  const pages = localize(allPages);
  const filterHomePage = isHome
    ? pages.filter(i => i.node.title !== "Home")
    : pages;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <body className={bodyClass} />
      </Helmet>
      <header className="header">
        <Hero home={isHome} opacity={overlay}>
          <Section>
            <div className="flex flex-center flex-space-between">
              <Navigation
                setBackgroundOpacity={() => setOverlay(!overlay)}
                overlay={overlay}
                location={locale}
              />
              <div>
                <Link
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
                  to={`/${currentPage[2] ? currentPage[2] : ""}`.replace(
                    "undefined",
                    ""
                  )}
                >
                  English
                </Link>{" "}
              </div>
            </div>
            {isHome ? (
              <div className="site-banner">
                <Header />
              </div>
            ) : null}
          </Section>
        </Hero>
      </header>
      <main>{children}</main>
      <Footer>
        <Section>
          <Grid className="grid-primary">
            <div className="max-width-70">
              <Image type="fluid" image={fluid} alt="white proorganica logo" />
              <small className="footer-rights-reserved">
                <span> © {new Date().getFullYear()} All rights reserved.</span>
              </small>
            </div>
            <div className="flex flex-column">
              {" "}
              <strong className="text-emphasis">Site</strong>
              {filterHomePage.map((i, key) => (
                <span key={key}>
                  <Link to={`/${i.node.slug}`.replace("home", "")}>
                    {i.node.title}
                  </Link>
                </span>
              ))}
            </div>
            <div className="flex flex-column">
              <strong className="text-emphasis text-darken">Links</strong>
              <Link to={`/#certification`}>Certification</Link>
              <Link to={`/#contact`}>Contact </Link>
            </div>
          </Grid>
        </Section>
      </Footer>
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
        whiteProOrganicaLogo: file(
          relativePath: { regex: "/proorganica-logo-white.png/" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
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
