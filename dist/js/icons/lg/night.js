import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M15.169 14.86a7.486 7.486 0 01-6.027-6.03A7.615 7.615 0 0110.95 2.4c.1-.2 0-.402-.201-.402A10.044 10.044 0 1022 13.251c0-.2-.2-.402-.402-.2a7.85 7.85 0 01-6.43 1.808z" /></svg>);