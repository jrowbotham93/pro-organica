import React from "react";
import { Links } from "..";

const Card = ({
  title,
  button,
  target,
  href,
  label,
  description,
  onClick,
  children,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <section>{children}</section>
      {title && (
        <div className="spacing-sm flex spacing-v-sm flex-column flex-center-vertical">
          <h2 className="card-title spacing-v-sm">{title}</h2>
          {button && (
            <Links
              styling="spacing-v-sm button-primary flex flex-center-vertical"
              alt={label}
              label={label}
              href={href}
              target={target}
              internal
            />
          )}
          {description && (
            <p className="spacing-sm card-description">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
