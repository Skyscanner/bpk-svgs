import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M.44 8.56a1.5 1.5 0 010-2.12l4.5-4.5a1.5 1.5 0 012.12 0l4.5 4.5a1.5 1.5 0 01-2.12 2.12L7.5 6.622V19.5a1.5 1.5 0 01-3 0V6.621l-1.94 1.94a1.5 1.5 0 01-2.12 0zm12 6.88a1.5 1.5 0 000 2.12l4.5 4.5a1.5 1.5 0 002.12 0l4.5-4.5a1.5 1.5 0 00-2.12-2.12l-1.94 1.939V4.5a1.5 1.5 0 00-3 0v12.879l-1.94-1.94a1.5 1.5 0 00-2.12 0z" /></svg>);