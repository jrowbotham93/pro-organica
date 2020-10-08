import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginTop: `3vw`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        textAlign: `center`,
      }}
    >
      <h1 className="central-banner-title-white" style={{ margin: 0 }}>
        {siteTitle}
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
