import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M4.299 12.707a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414l-5.293-5.293V19a1 1 0 01-2 0V7.414l-5.293 5.293a1 1 0 01-1.414 0z" /></svg>);