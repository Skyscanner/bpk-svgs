import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M11.25 3a1.5 1.5 0 00-3 0v11.25a2.25 2.25 0 002.25 2.25h3.75a3 3 0 013 3V21a1.5 1.5 0 003 0v-1.5a6 6 0 00-6-6h-3z" /><path d="M5.25 4.5A1.5 1.5 0 016.75 6v9a3 3 0 003 3h4.5a1.5 1.5 0 010 3h-4.5a6 6 0 01-6-6V6a1.5 1.5 0 011.5-1.5z" /></svg>);