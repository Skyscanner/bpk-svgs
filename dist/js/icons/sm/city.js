import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M18 6h-5.25a.75.75 0 01-.75-.75V4.5a3 3 0 00-3-3H6a3 3 0 00-3 3V21a1.5 1.5 0 003 0V5.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75V21a1.5 1.5 0 003 0v-.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75V21a1.5 1.5 0 003 0V9a3 3 0 00-3-3zm-1.5 10.5h-3a1.5 1.5 0 010-3h3a1.5 1.5 0 010 3zm0-4.5h-3a1.5 1.5 0 010-3h3a1.5 1.5 0 010 3z" /></svg>);