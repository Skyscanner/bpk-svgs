import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.263 16H6.211A4.26 4.26 0 012 11.692a4.305 4.305 0 013.28-4.197A1.52 1.52 0 006.4 6.416 5.75 5.75 0 0117.327 5.6a1.416 1.416 0 00.984.827A4.859 4.859 0 0117.263 16zM3 18a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm2 3a1 1 0 011-1h12a1 1 0 010 2H6a1 1 0 01-1-1z" /></svg>);