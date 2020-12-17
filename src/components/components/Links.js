import React from "react";
import { Link } from "gatsby";

const Links = ({ styling, internal, href, label, target }) => {
  return (
    <>
      {internal ? (
        <Link className={styling} alt={label} to={href}>
          {label}
        </Link>
      ) : (
        <a className={styling} target={target} alt={label} href={href}>
          {label}
        </a>
      )}
    </>
  );
};

export default Links;
