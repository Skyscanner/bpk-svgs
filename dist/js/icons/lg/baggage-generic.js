import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M5 2.5v-.002A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V12h1a2 2 0 012 2v5a2 2 0 01-2 2v1a1 1 0 11-2 0v-1H6v1a1 1 0 11-2 0v-1a2 2 0 01-2-2v-5a2 2 0 012-2h1V2.5zM6 3v9h4V3a.5.5 0 00-.5-.5h-3A.5.5 0 006 3zm7-.5v-.002A1.5 1.5 0 0114.5 1h3A1.5 1.5 0 0119 2.5V5h1a2 2 0 012 2v12a2 2 0 01-2 2v1a1 1 0 11-2 0v-1h-1.817c-.173 0-.294-.171-.256-.34.048-.212.073-.433.073-.66v-7a3 3 0 00-2.75-2.99.267.267 0 01-.25-.26V2.5zm1 .5v2h4V3a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5z" /></svg>);