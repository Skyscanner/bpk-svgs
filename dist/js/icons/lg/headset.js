import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 1a9 9 0 00-9 9v5a3 3 0 003 3h2a1 1 0 001-1v-4a1 1 0 00-1-1H5v-2a7 7 0 0114 0v2h-3a1 1 0 00-1 1v4a1 1 0 001 1h3a3 3 0 01-3 3h-3a1 1 0 000 2h3a5 5 0 005-5v-8a9 9 0 00-9-9z" /></svg>);