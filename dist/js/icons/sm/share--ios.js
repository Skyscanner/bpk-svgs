import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3 12.75a1.5 1.5 0 011.5 1.5V18A1.5 1.5 0 006 19.5h12a1.5 1.5 0 001.5-1.5v-3.75a1.5 1.5 0 013 0V18a4.5 4.5 0 01-4.5 4.5H6A4.5 4.5 0 011.5 18v-3.75a1.5 1.5 0 011.5-1.5z" clipRule="evenodd" /><path d="M12 15a1.5 1.5 0 01-1.5-1.5V6.621l-1.94 1.94a1.5 1.5 0 11-2.12-2.122l4.5-4.5a1.5 1.5 0 012.12 0l4.5 4.5a1.5 1.5 0 01-2.12 2.122L13.5 6.62v6.88A1.5 1.5 0 0112 15z" clipRule="evenodd" /></svg>);