import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { window } from "browser-monads";

const NavItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  padding-top: 20px;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #ffffff;
    height: 2px;
    transition: all 0.4s ease-in;
  }

  @media (max-width: 1300px) {
    font-size: 2.5rem;
    z-index: 6;
  }
`;

const NavbarLinks = ({ pages }) => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      {pages
        .filter(i => i.node.slug !== "home")
        .map((navItem, i) => {
          return (
            <NavItem
              // HACKY: check to see whether Ukrainan in the url and then append uk-UA / leave empty for GB
              to={`${
                window.location.pathname.split("/")[1] === "uk-UA"
                  ? "/uk-UA"
                  : ""
              }/${navItem.node.slug}`.replace("en-GB", "")}
              key={i}
              aria-current={navItem.node.title}
            >
              {navItem.node.title}
            </NavItem>
          );
        })}
    </>
  );
};

export default NavbarLinks;
