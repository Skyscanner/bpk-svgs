import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M2 12a10 10 0 0120 0v7a3 3 0 01-3 3h-2a1 1 0 01-1-1v-6a1 1 0 011-1h3v-2a8 8 0 00-16 0v2h3a1 1 0 011 1v6a1 1 0 01-1 1H5a3 3 0 01-3-3z" /></svg>);