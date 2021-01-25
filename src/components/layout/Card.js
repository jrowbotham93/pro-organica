import React from "react";
import { Links } from "..";

const Card = ({
  title,
  button,
  target,
  href,
  label,
  className,
  description,
  children,
}) => {
  return (
    <div className={`card ${className || ""}`}>
      <section>{children}</section>
      <div className="spacing-sm flex spacing-v-sm flex-column flex-center-vertical">
        {title && <h2 className="card-title spacing-v-sm">{title}</h2>}
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
          <small className="spacing-sm card-description">{description}</small>
        )}
      </div>
    </div>
  );
};

export default Card;
