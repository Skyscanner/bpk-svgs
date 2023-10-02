import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M9 6a3 3 0 016 0v1.5A1.5 1.5 0 0113.5 9h-6A1.5 1.5 0 006 10.5v12A1.5 1.5 0 007.5 24h9a1.5 1.5 0 001.5-1.5V6A6 6 0 006 6a1.5 1.5 0 003 0z" /></svg>);