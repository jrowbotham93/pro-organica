import React, { useState } from "react";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const Nav = styled.nav`
  height: 10vh;
  opacity: 1;
  display: flex;
  position: relative;
  justify-content: space-between;
  z-index: 10;
  align-self: center;

  @media (max-width: 1500px) {
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 1500px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1500px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    background-color: #3b6456;
    transition: all 0.3s ease-in;
    top: 0;
    left: ${props => (props.open ? "-100%" : "0")};
    z-index: 1;
    display: flex;
    justify-content: center;
  }
`;

const Hamburger = styled.div`
  background-color: white;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  z-index: 99;

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    z-index: 1;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
    z-index: 1;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
    z-index: 1;
  }
`;

const Navigation = ({ data, navClass, setBackgroundOpacity }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pages = data.allCosmicjsPages.edges;

  return (
    <Nav>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => {
          setNavbarOpen(!navbarOpen);
          setBackgroundOpacity();
        }}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks pages={pages && pages} />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks pages={pages && pages} />
        </Navbox>
      )}
    </Nav>
  );
};

Navigation.defaultProps = {
  navClass: `site-nav-item`,
};

Navigation.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    })
  ).isRequired,
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
