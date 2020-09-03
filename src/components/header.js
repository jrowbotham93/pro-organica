import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      width: `80%`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        textAlign: `left`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            opacity: `0.9`,
            fontFamily: `Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif`,
            fontWeight: 700,
            textDecoration: `none`,
            fontSize: `4.9rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
