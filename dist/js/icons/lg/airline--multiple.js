import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7.341 19.435A1 1 0 008.167 21h7.42a2.002 2.002 0 001.935-1.492l3.906-14.872C21.654 3.818 21.315 3 20.75 3h-1.357a1.66 1.66 0 00-1.358.818zm5.15-9.738a1.08 1.08 0 01-.237.639L4.952 21h-1.45a1 1 0 01-.805-1.595l7.298-9.86A1.212 1.212 0 0110.973 9h.978c.308 0 .522.31.54.697z" /></svg>);