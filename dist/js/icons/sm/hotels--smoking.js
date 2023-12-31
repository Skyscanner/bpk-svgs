import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3 5.25v-1.5a1.5 1.5 0 013 0v1.5a3 3 0 003 3h.803a5.972 5.972 0 01-.803-3v-1.5a1.5 1.5 0 013 0v1.5a3 3 0 003 3h1.5a4.5 4.5 0 014.5 4.5 1.5 1.5 0 01-3 0 1.5 1.5 0 00-1.5-1.5H9a6 6 0 01-6-6zm19.5 13.5a3 3 0 01-3 3h-15a3 3 0 010-6h15a3 3 0 013 3zm-1.5 0a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 000 3h3a1.5 1.5 0 001.5-1.5z" /></svg>);