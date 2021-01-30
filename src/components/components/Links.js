import React from "react";
import { Link } from "gatsby";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

const Links = ({
  styling,
  internal,
  href,
  label,
  target,
  animate = true,
  children,
  ...rest
}) => {
  return (
    <>
      {internal ? (
        <Link
          // paintDrip={animate}
          // hex={"#98b802"}
          className={styling}
          to={href}
          alt={label}
        >
          {children}
        </Link>
      ) : (
        <a
          className={styling}
          target={target}
          alt={label}
          href={href}
          {...rest}
        >
          {children}
        </a>
      )}
    </>
  );
};

export default Links;
