import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4.5 6a1.5 1.5 0 013 0v12a1.5 1.5 0 01-3 0v-2.55a.45.45 0 00-.45-.45H3a1.5 1.5 0 01-1.5-1.5v-3A1.5 1.5 0 013 9h1.05a.45.45 0 00.45-.45zm12 0a1.5 1.5 0 013 0v2.55a.45.45 0 00.45.45H21a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 0121 15h-1.05a.45.45 0 00-.45.45V18a1.5 1.5 0 01-3 0zm-6 4.5a1.5 1.5 0 000 3h3a1.5 1.5 0 000-3z" /></svg>);