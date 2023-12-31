import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M23.346 9.678A13.578 13.578 0 0012 3 13.578 13.578 0 00.654 9.678a4.454 4.454 0 000 4.647A13.58 13.58 0 0012 21a13.58 13.58 0 0011.346-6.675 4.454 4.454 0 000-4.647zM12 18a6 6 0 116-6 6 6 0 01-6 6zm3-6a3 3 0 11-3-3 3 3 0 013 3z" /></svg>);