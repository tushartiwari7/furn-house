import React from "react";
import "./Menu.css";
export const Menu = ({ children, open, className }) => {
  return (
    <ul
      className={`pos-abs list menu fs-m full-width ${className} ${
        open ? "open" : ""
      }`}
    >
      {children}
    </ul>
  );
};
