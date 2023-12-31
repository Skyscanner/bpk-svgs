import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M9.75 0a1.5 1.5 0 000 3h4.5a4.5 4.5 0 014.5 4.5v9a1.5 1.5 0 003 0v-9a7.5 7.5 0 00-7.5-7.5z" /><path d="M5.25 4.5a3 3 0 00-3 3V21a3 3 0 003 3h9a3 3 0 003-3V7.5a3 3 0 00-3-3z" /></svg>);