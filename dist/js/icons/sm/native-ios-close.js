import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M5.287 5.305a1 1 0 011.414 0l5.293 5.293 5.293-5.293a1 1 0 011.438 1.39l-.024.024-5.293 5.293 5.293 5.293a1 1 0 01-1.414 1.414l-5.293-5.293L6.7 18.72a1 1 0 01-1.414-1.414l5.293-5.293L5.287 6.72a1 1 0 010-1.414z" /></svg>);