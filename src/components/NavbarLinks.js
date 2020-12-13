import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { window } from "browser-monads";

const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-weight: 600;
  font-size: 3.7rem;
  padding-top: 20px;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: white;
    height: 2px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: grey;
    ::after {
      width: 100%;
      cursor: pointer;
    }
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
