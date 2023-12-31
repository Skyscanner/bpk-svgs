import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19 1.5H5a3 3 0 00-3 3v3.7a2 2 0 001.188 1.828l6.657 2.96a5 5 0 104.31 0l6.657-2.96A2 2 0 0022 8.2V4.5a3 3 0 00-3-3zm-4 16a3 3 0 11-3-3 3 3 0 013 3zm0-8.618a1 1 0 01-.553.894l-2 1a1 1 0 01-.894 0l-2-1A1 1 0 019 8.882V4.5a1 1 0 011-1h4a1 1 0 011 1z" /></svg>);