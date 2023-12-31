import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19.582 3H4.42a.424.424 0 00-.387.294.523.523 0 00.113.546l5.76 5.638a4.856 4.856 0 011.4 3.468v2.39a4.6 4.6 0 01-2.614 4.287l-1.348.576a.424.424 0 00-.226.481.376.376 0 00.355.32h9.056a.375.375 0 00.354-.317.425.425 0 00-.226-.483l-1.312-.561a4.6 4.6 0 01-2.614-4.286v-2.448a4.856 4.856 0 011.399-3.467l5.725-5.604a.52.52 0 00.11-.548.42.42 0 00-.383-.286zM14.5 7A1.5 1.5 0 1116 5.5 1.5 1.5 0 0114.5 7z" /></svg>);