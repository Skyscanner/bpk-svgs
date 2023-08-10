import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20 12A8 8 0 008.89 4.627a1 1 0 01-.78-1.842 9.995 9.995 0 11-5.54 5.882 1 1 0 011.904.613l-.019.053A8 8 0 1020 12z" /><path d="M4.293 6.207a1 1 0 011.414-1.414l7 7a1 1 0 01-1.414 1.414z" /></svg>);