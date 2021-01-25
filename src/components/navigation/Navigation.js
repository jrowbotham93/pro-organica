import React, { useState } from "react";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const Nav = styled.nav`
  opacity: 1;
  display: flex;
  position: relative;
  z-index: 10;
  align-self: center;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  display: flex;
  width: 50px;
  height: 25px;
  :hover {
    cursor: pointer;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  justify-content: flex-start;
  background-color: #007028;
  transition: all 0.3s ease-in;
  top: 0;
  left: ${props => (props.open ? "-100%" : "0")};
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const Hamburger = styled.div`
  background-color: #ffffff;
  opacity: 0.8;
  width: 25px;
  height: 4px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  border-radius: 20px;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  z-index: 99;

  ::before,
  ::after {
    width: 25px;
    height: 4px;
    background-color: #ffffff;
    content: "";
    position: absolute;
    transition: all 0.1s linear;
    z-index: 1;
    border-radius: 20px;
  }

  @media (min-width: 37.5em) {
    width: 30px;
    height: 3px;

    ::before,
    ::after {
      width: 30px;
      height: 3px;
    }
  }

  @media (min-width: 48em) {
    width: 35px;
    height: 4px;

    ::before,
    ::after {
      width: 35px;
      height: 4px;
    }
  }

  @media (min-width: 60em) {
    width: 40px;
    height: 5px;

    ::before,
    ::after {
      width: 40px;
      height: 5px;
    }
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

const Navigation = ({ data, setBackgroundOpacity, location }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const locale = location ? "uk-UA" : "en-GB";
  const pages = data.allCosmicjsPages.edges.filter(({ node }) =>
    node.locale.includes(locale)
  );

  return (
    <Nav
      onClick={() => {
        setNavbarOpen(!navbarOpen);
        setBackgroundOpacity();
      }}
    >
      <Toggle navbarOpen={navbarOpen}>
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
        allCosmicjsPages {
          edges {
            node {
              slug
              locale
              title
              locale
            }
          }
        }
      }
    `}
    render={data => <Navigation data={data} {...props} />}
  />
);

export default DefaultNavigationQuery;
