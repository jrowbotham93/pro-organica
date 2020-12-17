import React from "react";
import { Links } from "..";

const Card = ({
  title,
  button,
  target,
  href,
  label,
  description,
  children,
}) => {
  return (
    <div className="card">
      <section>{children}</section>
      {title && (
        <div className="flex spacing-sm flex-column flex-center-vertical">
          <h2 className="card-title flex-grow-one">{title}</h2>
          {button && (
            <Links
              styling="button-primary flex flex-center-vertical flex-grow-one"
              alt={label}
              label={label}
              href={href}
              target={target}
              internal
            />
          )}
          {description && <p className="card-description">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default Card;
