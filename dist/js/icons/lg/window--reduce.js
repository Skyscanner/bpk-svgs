import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M4 7a3 3 0 013-3h5a1 1 0 000-2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5v-5a1 1 0 00-2 0v5a3 3 0 01-3 3H7a3 3 0 01-3-3z" /><path d="M16.07 6.71a.997.997 0 011.41 1.41L10.6 15H13a1 1 0 010 2H8a1 1 0 01-1-1v-5a1 1 0 012 0v2.77z" /></svg>);