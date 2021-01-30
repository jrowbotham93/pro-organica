import React from "react";

const Section = ({
  id,
  title,
  className = "",
  spacing = "v-lg",
  description,
  children,
}) => {
  return (
    <section
      id={id}
      className={`block-center flex flex-column  spacing-general max-width spacing-${spacing} ${className}`}
    >
      {title && (
        <>
          <h1 className="flex flex-center-horizontal text-align-center">
            {title}
          </h1>{" "}
          <hr />
        </>
      )}
      {description && (
        <p className="flex flex-center-horizontal text-align-center spacing-v-sm ">
          {description}
        </p>
      )}
      {children}
    </section>
  );
};
export default Section;
