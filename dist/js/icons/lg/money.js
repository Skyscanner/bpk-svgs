import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zM6 13a1 1 0 111-1 1 1 0 01-1 1zm6 2a3 3 0 113-3 3 3 0 01-3 3zm6-2a1 1 0 111-1 1 1 0 01-1 1z" /></svg>);