import React from "react";

const Section = ({ id, title, spacing = "v-lg", description, children }) => {
  return (
    <section
      id={id}
      className={`block-center spacing-general max-width spacing-${spacing}`}
    >
      {title && (
        <>
          <h1 className="flex flex-center-horizontal">{title}</h1> <hr />
        </>
      )}
      {description && (
        <p className="flex flex-center-horizontal text-align-center spacing-v-sm">
          {description}
        </p>
      )}
      {children}
    </section>
  );
};
export default Section;
