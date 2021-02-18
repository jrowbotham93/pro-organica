import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { StaticQuery, graphql } from "gatsby";

import { Navigation, Hero, Section, Header, Grid, Footer, Links } from "..";
import "../../styles/app.css";

const DefaultLayout = ({ children, bodyClass, isHome, data }) => {
  const [overlay, setOverlay] = useState(false);
  const { pathname } = useLocation();
  let currentPage = pathname.split("/");

  const locale = currentPage.some(i => i === "uk-UA");
  const currentLocale = locale ? "uk-UA" : "en-GB";
  const ukrainian = pathname.includes("uk-UA");

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
                <Links
                  internal
                  href={
                    currentPage[1] === "uk-UA"
                      ? ""
                      : currentPage[1] !== "uk-UA"
                      ? `/uk-UA/${currentPage[1]}`
                      : "uk-UA"
                  }
                  styling="a-white"
                  animate={false}
                >
                  Українська
                </Links>
                <Links
                  internal
                  href={`/${currentPage[2] ? currentPage[2] : ""}`.replace(
                    "undefined",
                    ""
                  )}
                  styling="a-white"
                  animate={false}
                >
                  English
                </Links>{" "}
              </div>
            </div>
          </Section>
        </Hero>
      </header>

      <main>{children}</main>

      <Footer>
        <Section spacing="v-md">
          <Grid className="grid-secondary">
            <div className="flex flex-column">
              {" "}
              <strong className="text-emphasis">ProOrganica</strong>
              {filterHomePage.map((i, key) => (
                <span key={key}>
                  <Links
                    internal
                    styling="a-white"
                    href={`/${i.node.slug}`.replace("home", "")}
                  >
                    {i.node.title}
                  </Links>
                </span>
              ))}
            </div>
            <div className="flex flex-column">
              <strong className="text-emphasis text-darken">Company</strong>
              <Links internal styling="a-white" href={`/certification`}>
                {ukrainian ? "Сертифікація" : "Certification"}
              </Links>
              <Links internal styling="a-white" href="/contact">
                {ukrainian ? "Контакти" : "Contact"}
              </Links>
            </div>
          </Grid>
          <div className="flex footer-rights-reserved-container">
            {" "}
            <small className="footer-rights-reserved spacing">
              <span>
                {" "}
                ProOrganica © {new Date().getFullYear()} All rights reserved.
              </span>
            </small>
          </div>
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
