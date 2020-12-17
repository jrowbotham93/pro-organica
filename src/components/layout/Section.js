import React from "react";

const Section = ({ id, title, description, children }) => {
  return (
    <section className=" block-center spacing-general max-width page spacing-v-lf">
      {title && <h1 className="flex flex-center-horizontal">{title}</h1>}
      {description && (
        <p className=" flex flex-center-horizontal text-align-center">
          {description}
        </p>
      )}
      {children}
    </section>
  );
};
export default Section;
