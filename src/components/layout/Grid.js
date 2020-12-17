import React from "react";

const Grid = ({ id, className, children }) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};
export default Grid;
