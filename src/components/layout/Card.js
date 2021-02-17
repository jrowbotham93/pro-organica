import React from "react";
import { Links } from "..";
import UseAnimations from "react-useanimations";
import arrowRightCircle from "react-useanimations/lib/arrowRightCircle";

const Card = ({
  title,
  button,
  target,
  href,
  label,
  className,
  description,
  arrow,
  children,
}) => {
  return (
    <div className={`card ${className || ""}`}>
      <section>{children}</section>
      <div className="spacing-sm flex spacing-v-sm flex-column flex-center-vertical">
        {title && (
          <h2 className="card-title spacing-v-sm flex  flex-center-vertical"
            dangerouslySetInnerHTML={{ __html: title }}
          >
            {arrow && (
              <UseAnimations
                size={46}
                strokeColor={"var(--color-light-green)"}
                wrapperStyle={{ marginLeft: 10 }}
                animation={arrowRightCircle}
              />
            )}
          </h2>
        )}
        {button && (
          <Links
            styling="spacing-v-sm button-primary flex flex-center-vertical"
            alt={label}
            label={label}
            href={href}
            target={target}
            internal
          >
            {label}
          </Links>
        )}

        {description && (
          <small className="spacing-sm card-description">{description}</small>
        )}
      </div>
    </div>
  );
};

export default Card;
