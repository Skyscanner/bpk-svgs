import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M4.287 7.8a1 1 0 011.414 0l6.293 6.292L18.287 7.8a1 1 0 111.438 1.39l-.024.024-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z" /></svg>);