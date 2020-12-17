import React, { Fragment } from "react";

const Input = ({ type, value, label, onClick, alt, name, styles, ...rest }) => {
  return (
    <Fragment>
      {type === "text" && <label forHtml={name}>{label}</label>}
      <input
        {...rest}
        className={`${styles} flex flex-center-vertical`}
        id={name}
        value={name || undefined}
        alt={alt}
        name={name}
        type={type}
        onClick={onClick}
      />
    </Fragment>
  );
};

export default Input;
