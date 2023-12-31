import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M5 4a1 1 0 000 2h14a1 1 0 000-2zm13.91 4.083a1 1 0 00-.914-1.08Q17.955 7 17.913 7H6.087a1 1 0 00-1 1q0 .041.003.083L6 19a3.226 3.226 0 003 3h6a3.226 3.226 0 003-3zM8 3.79V4h8v-.147a.864.864 0 00-.324-.699A6.097 6.097 0 0012 2a6.08 6.08 0 00-3.74 1.179.77.77 0 00-.26.61z" /></svg>);