import React from "react";
import { Link } from "gatsby";

const Links = ({
  styling,
  internal,
  href,
  label,
  target,
  children,
  ...rest
}) => {
  return (
    <>
      {internal ? (
        <Link className={styling} alt={label} to={href}>
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
